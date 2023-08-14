type ListProps<T> = {
    items: T[]
    onClick : (value:T) => void
}

export const List = <T extends {id:number,name:string,lastName:string}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List Of Items</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
