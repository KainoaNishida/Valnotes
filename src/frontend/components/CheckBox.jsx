import React from 'react'
import './CheckBox.css'

const CheckBox = ({ isChecked, onChange }) => {
  return (
    <label className='custom-checkbox'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={onChange}
        className='custom-checkbox-input'
      />
      <span className='custom-checkbox-box'>
        {isChecked && (
          <svg viewBox='0 0 24 24' className='custom-checkbox-icon'>
            <polyline points='20 6 9 17 4 12' />
          </svg>
        )}
      </span>
    </label>
  )
}

export default CheckBox
