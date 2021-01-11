import React from 'react';

const formSchema = {
  name: {
    type: 'text',
    label: 'Name',
    maxLength: 155,
    pattern: '[A-Za-z]{3}',
    required: true,
  },
  description: {
    type: 'text',
    label: 'Description',
    required: true,
  },
  quantity: {
    type: 'number',
    label: 'Quantity',
    required: true,
  },
  productType: {
    type: 'select',
    label: 'productType',
    required: true,
    options: [
      {
        label: 'Meat',
        value: 'meat',
      },
      {
        label: 'Fruit',
        value: 'fruit',
      },
      {
        label: 'Vegetal',
        value: 'vegetal',
      },
    ],
  },
  tag: {
    type: 'radio',
    label: 'Tag',
    options: [
      {
        label: 'Vegan',
        value: 'vegan',
      },
      {
        label: 'Healthy',
        value: 'healthy',
      },
      {
        label: 'Gluten free',
        value: 'gluten free',
      },
    ],
  },
  available: {
    type: 'checkbox',
    label: 'Available',
  },
};

interface Props {
  product: any;
  setProduct: (arg0: any) => void;
  updateProduct: () => void;
}

export const ProductForm: React.FC<Props> = ({
  product,
  setProduct,
  updateProduct,
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
          else if (type == 'radio') return renderRadio(name, input);
          else return renderInput(type, name, input);
        })}
        <input type="submit" value="Submit" />
      </form>
    );
  };

  const renderInput = (type: string, name: string, input: any) => {
    return (
      <div key={name}>
        <label>{input.label}</label>
        <input
          type={type}
          value={product[name]}
          name={name}
          onChange={handleChange}
        />
        <br />
      </div>
    );
  };

  const renderRadio = (name: string, input: any) => {
    return (
      <div key={name}>
        <label>{input.label}</label>
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
        <br />
      </div>
    );
  };

  const renderSelect = (name: string, input: any) => {
    return (
      <div key={name}>
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
        <br />
      </div>
    );
  };

  return (
    <React.Fragment>
      <h1>Products Form</h1>
      {renderForm()}
    </React.Fragment>
  );
};
