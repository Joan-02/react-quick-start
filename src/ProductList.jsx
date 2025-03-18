const products = [
    { title: 'Cabbage', isFruit: true, id: 1 },
    { title: 'Garlic', isFruit: true, id: 2 },
    { title: 'Apple', isFruit: false, id: 3 },
];

export const ProductList = () => {
    const listItems = products.map(({ id, isFruit, title }) => (
      <li key={id} 
        style={{
            color: isFruit ? 'magenta' : 'darkgreen'
      }}>{title}</li>
    ));

    return listItems;
};


