import React, { useCallback, useEffect, useState } from 'react'

export const Cart = () => {
  const [cart, setCart] = useState<Product[]>([])
  const [totals, setTotals] = useState<Totals>({
    subTotal: 0,
    tax: 0,
    grandTotal: 0,
  })

  const getCartData = useCallback(async () => {
    const res = await fetch('/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data: CheckoutResponse = await res.json()

    setCart((cartArr) => [...cartArr, ...data?.cart?.items])
    setTotals(data?.cart?.totals)
  }, [])

  useEffect(() => {
    getCartData()
  }, [])

  return (
    <div className="order-summary p-1 m-1 mt-4">
      <div className="order-summary-container p-1">
        <h2 className="order-title">YOUR ORDER</h2>
        {cart?.length > 0 &&
          cart.map((item) => (
            <div className="order-item" key={item.name}>
              <p>{item.name}</p>
              <p>$ {item.price}</p>
            </div>
          ))}

        <hr className="divider" />

        {totals?.subTotal && (
          <div className="order-item">
            <p>Subtotal:</p> <p>$ {totals.subTotal}</p>
          </div>
        )}

        {totals?.tax !== undefined && (
          <div className="order-item">
            <p>Tax: </p> <p>$ {totals.tax}</p>
          </div>
        )}

        <hr className="divider" />

        {totals?.grandTotal && (
          <div className="order-item total">
            <p>Total: </p> <p>$ {totals.grandTotal}</p>
          </div>
        )}
      </div>
    </div>
  )
}

interface Product {
  name: string
  price: number
}

interface Totals {
  subTotal: number
  tax: number
  grandTotal: number
}

interface CheckoutResponse {
  cart: {
    items: Product[]
    totals: Totals
  }
}
