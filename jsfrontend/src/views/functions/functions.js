export const makeObject = (method, formData) => {
  return  {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Action": "application/json"
    },
    body: JSON.stringify(formData)
  };
}

export const filterList = (arr) => {
  const newarr = arr.map(item => {
    return {
      quantity: item.quantity,
      itemId: item.item.id
    }
  })
  return newarr
}
