const Currency_Formatter = new Intl.NumberFormat(undefined, {currency :"USD", style: "currency"})



const CurrencyFormat = (number : number) => {
  return (
   Currency_Formatter.format(number)
  )
}

export default CurrencyFormat