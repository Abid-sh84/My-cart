import React from 'react';

export default function Product(props) {
  return (
    <div className="row mt-3 align-items-center">
      <div className="col-2">
        <img
          src={props.product.imageUrl}
          alt={props.product.name}
          className="img-fluid"
          style={{ maxHeight: '100px' }}
        />
      </div>
      <div className="col-3">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary ms-2">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        ₹{props.product.quantity * props.product.price}
      </div>
      <div className="col-2">
        <button
          className="btn btn-danger"
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
