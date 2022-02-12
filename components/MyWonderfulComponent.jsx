import { Grid, styled } from "@mui/material";
import { useState, useEffect } from "react";

// Воспользовался деструктуризацией, чтобы присвоить объект сразу нескольким переменным, разбив его на части.
// При помощи `spread` получил остальные пропсы
export default function MyWonderfulComponent({
  id,
  options,
  children,
  ...other
}) {
  const { count } = other;
  const [summ, setSumm] = useState(count);

  // Создал свой стилизованный компонент `h1`
  const StyledHeading = styled("h1")(
    () => `
    color: ${other.color};
    `
  );

  // Указал пустой массив зависимостей, чтобы не превышать максимальную глубину обновления
  useEffect(() => {
    if (
      id &&
      options &&
      options.params &&
      options.params.fields &&
      options.params.fields.isDynamic
    ) {
      setSumm(summ + 1);
    }
  }, []);

  return (
    <>
      <StyledHeading>Hello World!</StyledHeading>
      <Grid>
        {/* Стили применяются к корневому элементу если item={true}*/}
        <Grid item={true} xs={12}>
          {children}
        </Grid>
        <Grid>{summ}</Grid>
        <Grid>
          Сообщение полученное со стороны сервера и прокинутое в компонент:
          {other.data}
        </Grid>
      </Grid>
    </>
  );
}
