const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD"
})

export default function currencyFormatter(amount) {
  return formatter.format(amount)
}