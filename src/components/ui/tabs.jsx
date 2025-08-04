import React from 'react';

export function Tabs({ children, defaultValue, className }) {
  const [active, setActive] = React.useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, child => {
        if (child.type.displayName === 'TabsList') {
          return React.cloneElement(child, { active, setActive });
        }
        if (child.type.displayName === 'TabsContent') {
          return child.props.value === active ? child : null;
        }
        return child;
      })}
    </div>
  );
}
Tabs.displayName = 'Tabs';

export function TabsList({ children, active, setActive, className }) {
  return (
    <div className={className} role="tablist">
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          isActive: child.props.value === active,
          onSelect: () => setActive(child.props.value),
        })
      )}
    </div>
  );
}
TabsList.displayName = 'TabsList';

export function TabsTrigger({ children, value, isActive, onSelect, className }) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onSelect}
      type="button"
      className={`px-4 py-2 font-semibold border-b-2 ${
        isActive ? 'border-current' : 'border-transparent text-gray-400 hover:text-gray-200'
      } ${className}`}
      style={
        isActive
          ? { borderColor: '#8c451f', color: '#8c451f' }
          : {}
      }
    >
      {children}
    </button>
  );
}
TabsTrigger.displayName = 'TabsTrigger';

export function TabsContent({ children }) {
  return <div className="mt-6">{children}</div>;
}
TabsContent.displayName = 'TabsContent';
