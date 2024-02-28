import React from 'react';

interface CityInputType {
  value: string;
  onChange: (value: string) => void;
}
export const CityInput=({ value, onChange }:CityInputType)=> {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="Weather in your city"
    />
  );
};


