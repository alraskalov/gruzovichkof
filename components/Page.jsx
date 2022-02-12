import MyWonderfulComponent from "./MyWonderfulComponent";

// Воспользовался деструктуризацией, чтобы присвоить объект сразу нескольким переменным, разбив его на части.
export default function Page({ id, options, count, color, data }) {
  return (
    <MyWonderfulComponent
      id={id}
      options={options}
      count={count}
      color={color}
      data={data}
    >
      I&apos;m text from a component
    </MyWonderfulComponent>
  );
}
