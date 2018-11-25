import React, { Component } from 'react';
import ConverterTitle from './ConverterTitleComponent';
import ConverterFrom from './ConverterFromComponent';

class Converter extends Component {
    render() {
        return (
          <div>
              <ConverterTitle title='Convertidor'/>
              <ConverterFrom/>
          </div>
        );
    }
}

export default Converter;

