import React from 'react'
import { Form } from 'react-bootstrap';
import { CartState } from '../context/Context';
import './filter.css'

const Filter = () => {
    const { filterState: { color, gender, price, type }
        , filterDispatch, } = CartState();

    const colors = ['Red', 'Blue', 'Green'];
    const genders = ['Men', 'Women'];
    const types = ['Polo', 'Hoodle', 'Basic']

    return (
        <div className='filters'>
            <Form >
                <p>Color</p>
                <ul>
                    {colors.map((item) => (
                        <div key={item} className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id={item}
                                label={item}
                                onChange={(event) =>
                                    filterDispatch({
                                        type: "FILTER_BY_COLOR",
                                        payload: color === "" ? item : ""
                                    })
                                }

                            />
                        </div>
                    ))}
                </ul>

                <p>Gender</p>
                <ul>
                    {genders.map((item) => (
                        <div key={item} className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id={item}
                                label={item}
                                onChange={() =>
                                    filterDispatch({
                                        type: "FILTER_BY_GENDER",
                                        payload: gender === "" ? item : ""
                                    })
                                }
                            />
                        </div>
                    ))}
                </ul>
                <p>Price</p>
                <ul>
                    <div className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id='0-250'
                            label='0-Rs 250'
                        />
                    </div>
                </ul>
                <ul>
                    <div className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id='251-450'
                            label='Rs 251 - 450'
                        />
                    </div>
                </ul>
                <ul>
                    <div className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id='450'
                            label='Rs 450'
                        />
                    </div>
                </ul>
                <p>Type</p>
                <ul>
                    {types.map((item) => (
                        <div key={item} className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id={item}
                                label={item}
                                onChange={() =>
                                    filterDispatch({
                                        type: "FILTER_BY_TYPE",
                                        payload: type === "" ? item : ""
                                    })
                                }
                            />
                        </div>
                    ))}
                </ul>
            </Form>
        </div>
    )
}

export default Filter