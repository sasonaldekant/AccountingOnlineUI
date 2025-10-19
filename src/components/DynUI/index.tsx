// Enhanced Mock DYN-UI komponente - Enterprise Ready Development Version
// Compatible sa @dyn-ui/react interface - drop-in replacement tokom development

import React, { useState, useCallback, useRef, useEffect } from 'react';

// Development flag za lako prebacivanje na pravu biblioteku
const USE_REAL_DYNUI = process.env.REACT_APP_USE_REAL_DYNUI === 'true';

// =============================================================================
// TYPE DEFINITIONS - Compatible sa @dyn-ui/react
// =============================================================================

export type InputType = 'text' | 'email' | 'password' | 'number' | 'currency' | 'tel' | 'url';
export type CurrencyType = 'RSD' | 'EUR' | 'USD';
export type ResizeMode = 'none' | 'vertical' | 'horizontal' | 'both';

export interface ValidationRule {
  type: 'required' | 'email' | 'url' | 'pattern' | 'minLength' | 'maxLength' | 'custom';
  message: string;
  value?: any;
  validator?: (value: any) => boolean | Promise<boolean>;
}

export interface CurrencyConfig {
  currency?: CurrencyType;
  precision?: number;
  thousandSeparator?: string;
  decimalSeparator?: string;
  showCurrencySymbol?: boolean;
  currencyPosition?: 'before' | 'after';
  autoFormat?: boolean;
  allowNegative?: boolean;
}

// =============================================================================
// CURRENCY FORMATTING UTILITIES
// =============================================================================

const CURRENCY_SYMBOLS: Record<CurrencyType, string> = {
  RSD: 'RSD',
  EUR: '€',
  USD: '$'
};

const DEFAULT_CURRENCY_CONFIGS: Record<CurrencyType, CurrencyConfig> = {
  RSD: {
    currency: 'RSD',
    precision: 2,
    thousandSeparator: '.',
    decimalSeparator: ',',
    showCurrencySymbol: true,
    currencyPosition: 'after',
    allowNegative: true
  },
  EUR: {
    currency: 'EUR',
    precision: 2,
    thousandSeparator: '.',
    decimalSeparator: ',',
    showCurrencySymbol: true,
    currencyPosition: 'after',
    allowNegative: true
  },
  USD: {
    currency: 'USD',
    precision: 2,
    thousandSeparator: ',',
    decimalSeparator: '.',
    showCurrencySymbol: true,
    currencyPosition: 'before',
    allowNegative: true
  }
};

export const formatCurrencyValue = (value: number, config: CurrencyConfig): string => {
  const finalConfig = { ...DEFAULT_CURRENCY_CONFIGS.RSD, ...config };
  
  if (isNaN(value)) return '';
  
  const isNegative = value < 0;
  const absValue = Math.abs(value);
  
  if (!finalConfig.allowNegative && isNegative) {
    return formatCurrencyValue(absValue, finalConfig);
  }
  
  const fixedValue = absValue.toFixed(finalConfig.precision || 2);
  const [integerPart, decimalPart] = fixedValue.split('.');
  
  let formattedInteger = integerPart;
  if (finalConfig.thousandSeparator && integerPart.length > 3) {
    formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, finalConfig.thousandSeparator);
  }
  
  let formatted = formattedInteger;
  if (finalConfig.precision && finalConfig.precision > 0 && decimalPart) {
    formatted += finalConfig.decimalSeparator + decimalPart;
  }
  
  if (finalConfig.showCurrencySymbol && finalConfig.currency) {
    const symbol = CURRENCY_SYMBOLS[finalConfig.currency];
    if (finalConfig.currencyPosition === 'before') {
      formatted = symbol + ' ' + formatted;
    } else {
      formatted = formatted + ' ' + symbol;
    }
  }
  
  return isNegative ? '-' + formatted : formatted;
};

export const parseCurrencyValue = (value: string, config: CurrencyConfig): number => {
  if (!value || typeof value !== 'string') return 0;
  
  const finalConfig = { ...DEFAULT_CURRENCY_CONFIGS.RSD, ...config };
  
  let cleaned = value.trim();
  
  // Ukloni currency symbol
  if (finalConfig.showCurrencySymbol && finalConfig.currency) {
    const symbol = CURRENCY_SYMBOLS[finalConfig.currency];
    cleaned = cleaned.replace(symbol, '').trim();
  }
  
  const isNegative = cleaned.startsWith('-');
  if (isNegative) {
    cleaned = cleaned.substring(1);
  }
  
  // Ukloni thousand separators
  if (finalConfig.thousandSeparator) {
    cleaned = cleaned.replace(new RegExp('\\' + finalConfig.thousandSeparator, 'g'), '');
  }
  
  // Zameni decimal separator sa dot
  if (finalConfig.decimalSeparator && finalConfig.decimalSeparator !== '.') {
    cleaned = cleaned.replace(finalConfig.decimalSeparator, '.');
  }
  
  const numValue = parseFloat(cleaned) || 0;
  return isNegative ? -numValue : numValue;
};

// =============================================================================
// VALIDATION UTILITIES
// =============================================================================

const validateField = (value: any, validation?: ValidationRule[]): string => {
  if (!validation || validation.length === 0) return '';
  
  for (const rule of validation) {
    switch (rule.type) {
      case 'required':
        if (!value || (typeof value === 'string' && value.trim() === '')) {
          return rule.message;
        }
        break;
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(String(value))) {
          return rule.message;
        }
        break;
        
      case 'pattern':
        const regex = typeof rule.value === 'string' ? new RegExp(rule.value) : rule.value;
        if (value && regex && !regex.test(String(value))) {
          return rule.message;
        }
        break;
        
      case 'minLength':
        if (value && String(value).length < rule.value) {
          return rule.message;
        }
        break;
        
      case 'maxLength':
        if (value && String(value).length > rule.value) {
          return rule.message;
        }
        break;
        
      case 'custom':
        if (rule.validator && value !== undefined && value !== null && value !== '') {
          try {
            if (!rule.validator(value)) {
              return rule.message;
            }
          } catch {
            return rule.message;
          }
        }
        break;
    }
  }
  
  return '';
};

// =============================================================================
// COMPONENTS
// =============================================================================

interface DynPageProps {
  title: string;
  children: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  headerActions?: React.ReactNode;
  loading?: boolean;
  error?: string | null;
  onErrorDismiss?: () => void;
}

export const DynPage: React.FC<DynPageProps> = ({ 
  title, children, breadcrumbs, headerActions, loading, error, onErrorDismiss 
}) => {
  if (USE_REAL_DYNUI) {
    // Fallback to real DynUI if available
    try {
      const { DynPage: RealDynPage } = require('@dyn-ui/react');
      return <RealDynPage {...arguments[0]} />;
    } catch {
      // Continue with mock implementation
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              {breadcrumbs && (
                <nav className="mb-2">
                  <ol className="flex items-center space-x-2 text-sm">
                    {breadcrumbs.map((crumb, index) => (
                      <li key={index} className="flex items-center">
                        {index > 0 && <span className="mx-2">/</span>}
                        {crumb.href ? (
                          <a href={crumb.href} className="text-blue-600 hover:underline">{crumb.label}</a>
                        ) : (
                          <span className="text-gray-500">{crumb.label}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            </div>
            {headerActions && <div>{headerActions}</div>}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-1"><p className="text-sm text-red-600">{error}</p></div>
              {onErrorDismiss && (
                <button onClick={onErrorDismiss} className="ml-3 text-red-400 hover:text-red-600">×</button>
              )}
            </div>
          </div>
        )}
        {!loading && children}
      </div>
    </div>
  );
};

interface DynInputProps {
  name?: string;
  label?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  type?: InputType;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  readonly?: boolean;
  
  // Number specific
  min?: number;
  max?: number;
  step?: number;
  showSpinButtons?: boolean;
  
  // Currency specific  
  currencyConfig?: CurrencyConfig;
  
  // Validation
  validation?: ValidationRule[];
  help?: string;
}

export const DynInput: React.FC<DynInputProps> = ({ 
  name, label, value, onChange, type = 'text', required, maxLength, minLength, placeholder, className,
  disabled, readonly, min, max, step = 1, showSpinButtons, currencyConfig, validation, help, ...props 
}) => {
  if (USE_REAL_DYNUI) {
    try {
      const { DynInput: RealDynInput } = require('@dyn-ui/react');
      return <RealDynInput {...arguments[0]} />;
    } catch {
      // Continue with mock implementation
    }
  }

  const [error, setError] = useState<string>('');
  const [focused, setFocused] = useState(false);
  
  const isCurrency = type === 'currency';
  const isNumber = type === 'number';
  
  const finalCurrencyConfig = isCurrency 
    ? { ...DEFAULT_CURRENCY_CONFIGS.RSD, ...currencyConfig }
    : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setError('');
    
    if (isCurrency && finalCurrencyConfig) {
      const numericValue = parseCurrencyValue(newValue, finalCurrencyConfig);
      onChange?.(numericValue);
    } else if (isNumber) {
      const numericValue = parseFloat(newValue) || 0;
      onChange?.(numericValue);
    } else {
      onChange?.(newValue);
    }
  };

  const handleBlur = () => {
    setFocused(false);
    const validationError = validateField(value, validation);
    setError(validationError);
  };

  const handleFocus = () => {
    setFocused(true);
    setError('');
  };

  const handleStepChange = (direction: 1 | -1) => {
    if (!isNumber) return;
    
    const currentValue = typeof value === 'number' ? value : parseFloat(String(value)) || 0;
    const newValue = currentValue + (direction * step);
    
    if (min !== undefined && newValue < min) return;
    if (max !== undefined && newValue > max) return;
    
    onChange?.(newValue);
  };

  const displayValue = () => {
    if (isCurrency && finalCurrencyConfig && typeof value === 'number') {
      return focused ? String(value) : formatCurrencyValue(value, finalCurrencyConfig);
    }
    return String(value || '');
  };

  const inputClasses = `
    block w-full px-3 py-2 border rounded-md shadow-sm text-sm
    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
    ${readonly ? 'bg-gray-50' : ''}
    ${isCurrency || isNumber ? 'text-right font-mono' : ''}
    ${isNumber && showSpinButtons ? 'pr-8' : ''}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={`mb-4 ${className || ''}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          name={name}
          type={isCurrency || isNumber ? 'text' : type}
          value={displayValue()}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          className={inputClasses}
          {...props}
        />
        
        {/* Spin buttons za number type */}
        {isNumber && showSpinButtons && !disabled && !readonly && (
          <div className="absolute right-1 top-1 bottom-1 flex flex-col">
            <button 
              type="button"
              onClick={() => handleStepChange(1)}
              disabled={max !== undefined && Number(value) >= max}
              className="flex-1 px-1 text-xs text-gray-400 hover:text-gray-600 disabled:opacity-50"
            >
              ▲
            </button>
            <button 
              type="button"
              onClick={() => handleStepChange(-1)}
              disabled={min !== undefined && Number(value) <= min}
              className="flex-1 px-1 text-xs text-gray-400 hover:text-gray-600 disabled:opacity-50"
            >
              ▼
            </button>
          </div>
        )}
      </div>
      
      {help && !error && (
        <p className="mt-1 text-sm text-gray-500">{help}</p>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

interface SelectOption { 
  value: any; 
  label: string; 
  disabled?: boolean;
}

interface DynSelectProps {
  name?: string;
  label?: string;
  name?: string;
  value?: any;
  onChange?: (value: any) => void;
  options?: SelectOption[];
  required?: boolean;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  validation?: ValidationRule[];
  help?: string;
  multiple?: boolean;
  searchable?: boolean;
}

export const DynSelect: React.FC<DynSelectProps> = ({ 
  name, label, value, onChange, options = [], required, className, disabled, placeholder, validation, help, ...props 
}) => {
  if (USE_REAL_DYNUI) {
    try {
      const { DynSelect: RealDynSelect } = require('@dyn-ui/react');
      return <RealDynSelect {...arguments[0]} />;
    } catch {
      // Continue with mock implementation
    }
  }

  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setError('');
    
    // Try to parse as number, otherwise keep as string
    const parsedValue = isNaN(Number(newValue)) ? newValue : Number(newValue);
    onChange?.(parsedValue || '');
  };

  const handleBlur = () => {
    const validationError = validateField(value, validation);
    setError(validationError);
  };

  return (
    <div className={`mb-4 ${className || ''}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        name={name}
        value={value || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        className={`
          block w-full px-3 py-2 border rounded-md shadow-sm text-sm
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {!placeholder && <option value="">Izaberite...</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      
      {help && !error && (
        <p className="mt-1 text-sm text-gray-500">{help}</p>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

interface DynTextAreaProps { 
  name?: string;
  label?: string; 
  value?: string; 
  onChange?: (value: string) => void; 
  maxLength?: number;
  minLength?: number; 
  rows?: number; 
  placeholder?: string; 
  className?: string;
  disabled?: boolean;
  readonly?: boolean;
  showCharacterCount?: boolean;
  resize?: ResizeMode;
  autoResize?: boolean;
  validation?: ValidationRule[];
  help?: string;
}

export const DynTextArea: React.FC<DynTextAreaProps> = ({ 
  name, label, value, onChange, maxLength, minLength, rows = 4, placeholder, className, disabled, readonly,
  showCharacterCount, resize = 'vertical', autoResize, validation, help, ...props 
}) => {
  if (USE_REAL_DYNUI) {
    try {
      const { DynTextArea: RealDynTextArea } = require('@dyn-ui/react');
      return <RealDynTextArea {...arguments[0]} />;
    } catch {
      // Continue with mock implementation
    }
  }

  const [error, setError] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const handleAutoResize = useCallback(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [autoResize]);

  useEffect(() => {
    if (autoResize) {
      handleAutoResize();
    }
  }, [value, autoResize, handleAutoResize]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    
    if (maxLength && newValue.length > maxLength) {
      return; // Block input if max length exceeded
    }
    
    setError('');
    onChange?.(newValue);
    
    if (autoResize) {
      setTimeout(handleAutoResize, 0);
    }
  };

  const handleBlur = () => {
    const validationError = validateField(value, validation);
    setError(validationError);
  };

  const characterCount = (value || '').length;
  const showCount = showCharacterCount || maxLength;
  
  const resizeStyle = autoResize ? { resize: 'none' } : { resize };

  return (
    <div className={`mb-4 ${className || ''}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      
      <textarea
        ref={textareaRef}
        name={name}
        value={value || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={maxLength}
        minLength={minLength}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        style={resizeStyle}
        className={`
          block w-full px-3 py-2 border rounded-md shadow-sm text-sm
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
          ${readonly ? 'bg-gray-50' : ''}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />
      
      <div className="flex justify-between mt-1">
        <div>
          {help && !error && (
            <p className="text-sm text-gray-500">{help}</p>
          )}
          
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
        </div>
        
        {showCount && (
          <div className={`text-sm ${
            maxLength && characterCount > maxLength * 0.8 
              ? characterCount >= maxLength 
                ? 'text-red-600 font-medium' 
                : 'text-orange-600'
              : 'text-gray-500'
          }`}>
            {maxLength ? `${characterCount}/${maxLength}` : characterCount}
          </div>
        )}
      </div>
    </div>
  );
};

interface DynButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const DynButton: React.FC<DynButtonProps> = ({ 
  children, variant = 'primary', size = 'md', loading, disabled, onClick, type = 'button', className, ...props 
}) => {
  if (USE_REAL_DYNUI) {
    try {
      const { DynButton: RealDynButton } = require('@dyn-ui/react');
      return <RealDynButton {...arguments[0]} />;
    } catch {
      // Continue with mock implementation
    }
  }

  const baseClasses = 'inline-flex justify-center items-center border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  const variantClasses = {
    primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50 focus:ring-blue-500',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500'
  };
  const sizeClasses = { 
    sm: 'px-3 py-2 text-sm', 
    md: 'px-4 py-2 text-sm', 
    lg: 'px-6 py-3 text-base' 
  };
  
  return (
    <button
      type={type} 
      onClick={onClick} 
      disabled={disabled || loading}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''} 
        ${className || ''}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
      )}
      {children}
    </button>
  );
};

// Ostale komponente ostaju iste...
interface Column { 
  key: string; 
  title: string; 
  width?: number; 
  sortable?: boolean; 
  render?: (value: any, record: any) => React.ReactNode; 
}

interface DynGridProps {
  data?: any[]; 
  columns?: Column[]; 
  loading?: boolean; 
  emptyStateText?: string;
  pagination?: { 
    pageSize?: number; 
    showSizeChanger?: boolean; 
    showQuickJumper?: boolean; 
    showTotal?: (total: number, range: [number, number]) => string; 
  };
  rowKey?: string; 
  sortable?: boolean; 
  filterable?: boolean;
}

export const DynGrid: React.FC<DynGridProps> = ({ 
  data = [], columns = [], loading, emptyStateText = "Nema podataka", rowKey = 'id' 
}) => {
  if (USE_REAL_DYNUI) {
    try {
      const { DynGrid: RealDynGrid } = require('@dyn-ui/react');
      return <RealDynGrid {...arguments[0]} />;
    } catch {
      // Continue with mock implementation
    }
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th key={column.key} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: column.width }}>
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr><td colSpan={columns.length} className="px-6 py-12 text-center">
                    <div className="flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>
                  </td></tr>
                ) : data.length === 0 ? (
                  <tr><td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">{emptyStateText}</td></tr>
                ) : (
                  data.map((item, index) => (
                    <tr key={item[rowKey] || index} className="hover:bg-gray-50">
                      {columns.map((column) => (
                        <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {column.render ? column.render(item[column.key], item) : item[column.key] || '-'}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DynFieldContainerProps { 
  title?: string; 
  children: React.ReactNode; 
  className?: string;
}

export const DynFieldContainer: React.FC<DynFieldContainerProps> = ({ title, children, className }) => {
  if (USE_REAL_DYNUI) {
    try {
      const { DynFieldContainer: RealDynFieldContainer } = require('@dyn-ui/react');
      return <RealDynFieldContainer {...arguments[0]} />;
    } catch {
      // Continue with mock implementation
    }
  }

  return (
    <div className={`bg-white shadow rounded-lg p-6 mb-6 ${className || ''}`}>
      {title && <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>}
      {children}
    </div>
  );
};

// Legacy exports pentru compatibility
export const DynNumberInput = DynInput; // Deprecated: koristiti DynInput sa type="number"

// Utility exports
export { formatCurrencyValue, parseCurrencyValue, DEFAULT_CURRENCY_CONFIGS, CURRENCY_SYMBOLS };
