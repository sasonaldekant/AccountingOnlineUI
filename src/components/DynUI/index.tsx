// Mock DYN-UI komponente - drop-in replacement za @dyn-ui/react
import React from 'react';

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
}) => (
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

interface DynInputProps {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
  className?: string;
  type?: string;
}

export const DynInput: React.FC<DynInputProps> = ({ 
  label, value, onChange, required, maxLength, placeholder, className, type = "text", ...props 
}) => (
  <div className={`mb-4 ${className || ''}`}>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <input
      type={type}
      value={value || ''}
      onChange={(e) => onChange?.(e.target.value)}
      maxLength={maxLength}
      placeholder={placeholder}
      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
      {...props}
    />
  </div>
);

interface SelectOption { value: any; label: string; }

interface DynSelectProps {
  label?: string;
  name?: string;
  value?: any;
  onChange?: (value: any) => void;
  options?: SelectOption[];
  required?: boolean;
  className?: string;
}

export const DynSelect: React.FC<DynSelectProps> = ({ 
  label, value, onChange, options = [], required, className, ...props 
}) => (
  <div className={`mb-4 ${className || ''}`}>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <select
      value={value || ''}
      onChange={(e) => onChange?.(parseInt(e.target.value) || e.target.value)}
      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
      {...props}
    >
      <option value="">Izaberite...</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

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
  const baseClasses = 'inline-flex justify-center items-center border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50 focus:ring-blue-500',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500'
  };
  const sizeClasses = { sm: 'px-3 py-2 text-sm', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base' };
  
  return (
    <button
      type={type} onClick={onClick} disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`}
      {...props}
    >
      {loading && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>}
      {children}
    </button>
  );
};

interface Column { key: string; title: string; width?: number; sortable?: boolean; render?: (value: any, record: any) => React.ReactNode; }

interface DynGridProps {
  data?: any[]; columns?: Column[]; loading?: boolean; emptyStateText?: string;
  pagination?: { pageSize?: number; showSizeChanger?: boolean; showQuickJumper?: boolean; showTotal?: (total: number, range: [number, number]) => string; };
  rowKey?: string; sortable?: boolean; filterable?: boolean;
}

export const DynGrid: React.FC<DynGridProps> = ({ data = [], columns = [], loading, emptyStateText = "Nema podataka", rowKey = 'id' }) => (
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

interface DynFieldContainerProps { title: string; children: React.ReactNode; }
export const DynFieldContainer: React.FC<DynFieldContainerProps> = ({ title, children }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
    {children}
  </div>
);

interface DynTextAreaProps { label?: string; value?: string; onChange?: (value: string) => void; maxLength?: number; rows?: number; placeholder?: string; className?: string; }
export const DynTextArea: React.FC<DynTextAreaProps> = ({ label, value, onChange, maxLength, rows = 4, placeholder, className, ...props }) => (
  <div className={`mb-4 ${className || ''}`}>
    {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <textarea value={value || ''} onChange={(e) => onChange?.(e.target.value)} maxLength={maxLength} rows={rows} placeholder={placeholder}
      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border" {...props} />
  </div>
);

interface DynNumberInputProps { label?: string; value?: number; onChange?: (value: number) => void; min?: number; max?: number; step?: number; placeholder?: string; className?: string; }
export const DynNumberInput: React.FC<DynNumberInputProps> = ({ label, value, onChange, min, max, step, placeholder, className, ...props }) => (
  <div className={`mb-4 ${className || ''}`}>
    {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <input type="number" value={value || ''} onChange={(e) => onChange?.(parseFloat(e.target.value) || 0)} min={min} max={max} step={step} placeholder={placeholder}
      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border" {...props} />
  </div>
);