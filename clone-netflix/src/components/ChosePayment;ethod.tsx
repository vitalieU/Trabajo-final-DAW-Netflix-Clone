export default function ChosePaymentMethod() {

    return (
        <div>
            <h1>Chose Payment Method</h1>
            
            <input type="radio" id="credit" name="payment" value="credit" />
            <label htmlFor="credit">Credit Card</label>
            <input type="radio" id="debit" name="payment" value="debit" />
            <label htmlFor="debit">Debit Card</label>
            <input type="radio" id="paypal" name="payment" value="paypal" />
            <label htmlFor="paypal">Paypal</label>
            
        </div>
    )
}