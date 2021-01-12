import React from 'react';
import formSchema from './ProductFormSchema.json';

interface Props {
  product: any;
  setProduct: (arg0: any) => void;
  updateProduct: () => void;
  setRenderedComponent: (arg0: any) => void;
}

export const ProductForm: React.FC<Props> = ({
  product,
  setProduct,
  updateProduct,
  setRenderedComponent,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateProduct();
  };

  const handleChange = (event: any) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    const updatedProduct = {
      ...product,
      [event.target.name]: value,
    };
    setProduct(updatedProduct);
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        {Object.entries(formSchema || {}).map((entry) => {
          const [name, input] = entry;
          const { type } = input;
          if (type === 'select') return renderSelect(name, input);
          else if (type === 'radio') return renderRadio(name, input);
          else if (type === 'checkbox') return renderCheckbox(name, input);
          else return renderInput(type, name, input);
        })}
        <input type="submit" value="Submit" />
      </form>
    );
  };

  const renderInput = (type: string, name: string, input: any) => {
    type === 'date' && (product[name] = product[name].split('T')[0]);
    return (
      <div key={name} className="formGroup">
        <label>{input.label}</label>
        <input
          type={type}
          value={product[name]}
          name={name}
          onChange={handleChange}
          required={!!input.required}
          maxLength={input.maxLength || 524288}
          pattern={input.pattern || '.*'}
        />
      </div>
    );
  };

  const renderCheckbox = (name: string, input: any) => {
    return (
      <div key={name} className="formCheckbox">
        <label>{input.label}</label>
        <input
          type="checkbox"
          name={name}
          onChange={handleChange}
          checked={product[name]}
        />
      </div>
    );
  };

  const renderRadio = (name: string, input: any) => {
    return (
      <div key={name} className="formRadio">
        <p>{input.label}</p>
        {input.options.map(
          ({ value, label }: { value: string; label: string }) => {
            return (
              <div key={value}>
                <label>{label}</label>
                <input
                  type="radio"
                  value={value}
                  name={name}
                  checked={product[name] === value}
                  onChange={handleChange}
                />
              </div>
            );
          }
        )}
      </div>
    );
  };

  const renderSelect = (name: string, input: any) => {
    return (
      <div key={name} className="formGroup">
        <label>{input.label}</label>
        <select value={product[name]} name={name} onChange={handleChange}>
          {input.options.map(
            ({ value, label }: { value: string; label: string }) => (
              <option key={value} value={value}>
                {label}
              </option>
            )
          )}
        </select>
      </div>
    );
  };

  return (
    <div className="productForm">
      <h1>Products Form</h1>
      {renderForm()}
      <a onClick={() => setRenderedComponent('table')}>Back</a>
    </div>
  );
};
