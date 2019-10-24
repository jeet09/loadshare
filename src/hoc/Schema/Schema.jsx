import React, { Component } from 'react';
import StringSchema from '../StringSchema/StringSchema';
// import StringKeySchema from '../StringKeySchema/StringKeySchema';
import RootObject from '../../components/RootObject/RootObject';
import ArraySchema from '../ArraySchema/ArraySchema';
import NumberSchema from '../NumberSchema/NumberSchema';
import BooleanSchema from '../BooleanSchema/BooleanSchema';

const schema = (data, parent, elKey) => {
    
        const checkType = (value) => {
            let type = typeof value;

            if(type == 'number')
                return 'number';
            
            if(type == 'boolean')
                return 'boolean';

            if( type != 'object' )
                return type;

            if( value instanceof Array )
                return 'array';

            if( value instanceof Date)
                return 'date';

            return 'object';
        }
        
        let WrappedSchema = StringSchema;
        const type = checkType(data);
        console.log("type", type)
        if(type === 'object') {
            WrappedSchema = RootObject;
        } else if(type === 'array') {
            WrappedSchema = ArraySchema;
        } else if(type === 'number') {
            WrappedSchema = NumberSchema;
        } else if(type === 'boolean') {
            WrappedSchema = BooleanSchema;
        }

        // const WrappedSchema = type='value' ? StringSchema : StringKeySchema;

        return React.createElement( WrappedSchema, {
            data: data,
            elKey: typeof elKey != 'undefined' ? elKey : '',
            parent: parent            
        });
            
}
            


export default schema;