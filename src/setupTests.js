// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

test('verifica o texto de um botão', () => {
  const button = document.createElement('button');
  button.textContent = 'Clique aqui';

  expect(button).toHaveTextContent('Clique aqui'); // Mais legível e direto
});
