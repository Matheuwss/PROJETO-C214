import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from "./main/Calculator";
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";

test("Chamando o onClick quando o botão é clicado", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button label="Botão de Teste" onClick={onClickMock} />);
  const button = getByText("Botão de Teste");

  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalled();
});

test("Renders button correctly", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button label="Botão de Teste" onClick={onClickMock} />);
  const button = getByText("Botão de Teste");

  expect(button).toBeInTheDocument();
});

test("Renders display correctly", () => {
  const { getByText } = render(<Display valor="123" res="456" />);
  const valorElement = getByText("123");
  const resElement = getByText("456");

  expect(valorElement).toBeInTheDocument();
  expect(resElement).toBeInTheDocument();
});

test("Renders calculator correctly", () => {
  const { getByText } = render(<Calculator />);
  const titleElement = screen.getByText("CALCULADORA");
  expect(titleElement).toBeInTheDocument();
});

test('Verificação do botão AC', () => {
  const { getByText } = render(<Calculator />);
  const elementoAC = screen.getByText(/AC/i);
  expect(elementoAC).toBeInTheDocument();
});

test('Verificação do elemento 9', () => {
  const { getByText } = render(<Calculator />);
  const elementoNumero9 = screen.getByText(/9/i);
  expect(elementoNumero9).toBeInTheDocument();
});

test('Verificação do elemento 8', () => {
  const { getByText } = render(<Calculator />);
  const elementoNumero8 = screen.getByText(/8/i);
  expect(elementoNumero8).toBeInTheDocument();
});

test('Verificação do elemento 7', () => {
  const { getByText } = render(<Calculator />);
  const elementoNumero7 = screen.getByText(/7/i);
  expect(elementoNumero7).toBeInTheDocument();
});

test('Verificação do elemento 6', () => {
  const { getByText } = render(<Calculator />);
  const elementoNumero6 = screen.getByText(/6/i);
  expect(elementoNumero6).toBeInTheDocument();
});

test('Verificação do elemento 5', () => {
  const { getByText } = render(<Calculator />);
  const elementoNumero5 = screen.getByText(/5/i);
  expect(elementoNumero5).toBeInTheDocument();
});

test('Verificação do elemento 4', () => {
  const { getByText } = render(<Calculator />);
  const elementoNumero4 = screen.getByText(/4/i);
  expect(elementoNumero4).toBeInTheDocument();
});

test('Verificação do elemento 3', () => {
  const { getByText } = render(<Calculator />);
  const elementoNumero3 = screen.getByText(/3/i);
  expect(elementoNumero3).toBeInTheDocument();
});

test('Verificação do elemento 2', () => {
  const { getByText } = render(<Calculator />);
  const elementoNumero2 = screen.getByText(/2/i);
  expect(elementoNumero2).toBeInTheDocument();
});

test('Verificação do elemento 1', () => {
  const { getByText } = render(<Calculator />);
  const elementoNumero1 = screen.getByText(/1/i);
  expect(elementoNumero1).toBeInTheDocument();
});

test('Verificação do elemento (', () => {
  const { getByText } = render(<Calculator />);
  const elementoParenteseEsquerdo = screen.getByText('(');
  expect(elementoParenteseEsquerdo).toBeInTheDocument();
});

test('Verificação do elemento )', () => {
  const { getByText } = render(<Calculator />);
  const elementoParenteseDireito = screen.getByText(')');
  expect(elementoParenteseDireito).toBeInTheDocument();
});

test('Verificação do elemento ÷', () => {
  const { getByText } = render(<Calculator />);
  const elementoDivision = screen.getByText('÷');
  expect(elementoDivision).toBeInTheDocument();
});

test('Verificação do elemento ×', () => {
  const { getByText } = render(<Calculator />);
  const elementoMultiplication = getByText('×');
  expect(elementoMultiplication).toBeInTheDocument();
});

test('Verificação do elemento -', () => {
  const { getByText } = render(<Calculator />);
  const elementoMenos = screen.getByText('-');
  expect(elementoMenos).toBeInTheDocument();
});

test('Verificação do elemento +', () => {
  const { getByText } = render(<Calculator />);
  const elementoMais = screen.getByText('+');
  expect(elementoMais).toBeInTheDocument();
});

test('Verificação do elemento .', () => {
  const { getByText } = render(<Calculator />);
  const elementoPonto = screen.getByText('.');
  expect(elementoPonto).toBeInTheDocument();
});

test('Verificação do elemento =', () => {
  const { getByText } = render(<Calculator />);
  const elementoIgual = screen.getByText('=');
  expect(elementoIgual).toBeInTheDocument();
});

test('Verificação do botão C', () => {
  const { getByText } = render(<Calculator />);
  const elementoC = screen.getByText('C');
  expect(elementoC).toBeInTheDocument();
});
