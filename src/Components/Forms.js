import React, { useContext, useEffect, useState } from "react";
import currencyTags from "../Services/wallanceApi";
import MyContext from "../Context/Context";
const Forms = () => {
    const [formsValues, setFormsValues ] = useState({
        id: 0,
        quantity: '',
        currency: 'USD',
        method: 'Money',
        tag: 'Food',
        description: '',
    })
    const [tags, setTags] = useState([])
    const { expensives, setExpensives } = useContext(MyContext)
    
    const handleInputChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setFormsValues({
            ...formsValues,
            [name]:value
        })
    }
    const handleSubmit = () => {
        setExpensives([...expensives, formsValues]);
        
        setFormsValues({
           id: formsValues.id += 1,
           quantity: '',
           currency: 'USD',
           method: 'Money',
           tag: 'Food',
           description: '',    
        })
    }
    useEffect(() => {
      const fetchTags = async () => {
        const tags = await currencyTags();
        setTags(tags)
      }
      fetchTags();
    }, [])

    return (
       <div> 
         <section>
            <fieldset>
                <label htmlFor="quantity">
                    Quantity:
                    <input
                      type='number'
                      id="quantity"
                      name="quantity"
                      onChange={ handleInputChange }
                    />
                </label>
                <label htmlFor="currency">
                    Currency:
                    <select id="currency" name="currency" onChange={ handleInputChange }>
                        {tags.map((tag, index) =>  <option key={index}>{tag}</option> )}
                    </select>
                </label>
                <label htmlFor="method">
                    Payment Method:
                    <select id="method" name="method" onChange={ handleInputChange }>
                        <option>Money</option>
                        <option>Credit Card</option>
                        <option>Debit Card</option>
                    </select>
                </label>
                <label htmlFor="tag">
                    Tag:
                    <select id="tag" name="tag" onChange={ handleInputChange }>
                        <option>Food</option>
                        <option>Leisure</option>
                        <option>Work</option>
                        <option>Health</option>
                    </select>
                </label>
                <label htmlFor="description">
                    Description:
                    <input type="text" name="description" onChange={ handleInputChange }/>
                </label>
                <button onClick={ handleSubmit }>Adicionar Despesa</button>
            </fieldset>
        </section>
        
       </div>
    )
}

export default Forms;