import {render} from './helpers/test-utils'

describe('getBy* queries throw an error when there are multiple elements returned', () => {
  test('getByLabelText', () => {
    const {getByLabelText} = render(
      `<div aria-label="his"></div><div aria-label="history"></div>`,
    )
    expect(() => getByLabelText(/his/)).toThrow(/multiple elements/i)
  })
  test('getByPlaceholderText', () => {
    const {getByPlaceholderText} = render(
      `<input placeholder="his" /><input placeholder="history" />`,
    )
    expect(() => getByPlaceholderText(/his/)).toThrow(/multiple elements/i)
  })
  test('getByText', () => {
    const {getByText} = render(`<div>his</div><div>history</div>`)
    expect(() => getByText(/his/)).toThrow(/multiple elements/i)
  })
  test('getByAltText', () => {
    const {getByAltText} = render(
      `<img alt="his" src="his.png" /><img alt="history" src="history.png" />`,
    )
    expect(() => getByAltText(/his/)).toThrow(/multiple elements/i)
  })
  test('getByTitle', () => {
    const {getByTitle} = render(
      `<div title="his"></div><div title="history"></div>`,
    )
    expect(() => getByTitle(/his/)).toThrow(/multiple elements/i)
  })
  test('getByDisplayValue', () => {
    const {getByDisplayValue} = render(
      `<input value="his" /><select><option value="history">history</option></select>`,
    )
    expect(() => getByDisplayValue(/his/)).toThrow(
      /multiple elements with the display value:/i,
    )
  })
  test('getByRole', () => {
    const {getByRole} = render(
      `<div role="his"></div><div role="history"></div>`,
    )
    expect(() => getByRole(/his/)).toThrow(/multiple elements/i)
  })
  test('getByTestId', () => {
    const {getByTestId} = render(
      `<div data-testid="his"></div><div data-testid="history"></div>`,
    )
    expect(() => getByTestId(/his/)).toThrow(/multiple elements/i)
  })
})

describe('queryBy* queries throw an error when there are multiple elements returned', () => {
  test('queryByLabelText', () => {
    const {queryByLabelText} = render(
      `<div aria-label="his"></div><div aria-label="history"></div>`,
    )
    expect(() => queryByLabelText(/his/)).toThrow(/multiple elements/i)
  })
  test('queryByPlaceholderText', () => {
    const {queryByPlaceholderText} = render(
      `<input placeholder="his" /><input placeholder="history" />`,
    )
    expect(() => queryByPlaceholderText(/his/)).toThrow(/multiple elements/i)
  })
  test('queryByText', () => {
    const {queryByText} = render(`<div>his</div><div>history</div>`)
    expect(() => queryByText(/his/)).toThrow(/multiple elements/i)
  })
  test('queryByAltText', () => {
    const {queryByAltText} = render(
      `<img alt="his" src="his.png" /><img alt="history" src="history.png" />`,
    )
    expect(() => queryByAltText(/his/)).toThrow(/multiple elements/i)
  })
  test('queryByTitle', () => {
    const {queryByTitle} = render(
      `<div title="his"></div><div title="history"></div>`,
    )
    expect(() => queryByTitle(/his/)).toThrow(/multiple elements/i)
  })
  test('queryByDisplayValue', () => {
    const {queryByDisplayValue} = render(
      `<input value="his" /><select><option value="history">history</option></select>`,
    )
    expect(() => queryByDisplayValue(/his/)).toThrow(
      /multiple elements with the display value:/i,
    )
  })
  test('queryByRole', () => {
    const {queryByRole} = render(
      `<div role="his"></div><div role="history"></div>`,
    )
    expect(() => queryByRole(/his/)).toThrow(/multiple elements/i)
  })
  test('queryByTestId', () => {
    const {queryByTestId} = render(
      `<div data-testid="his"></div><div data-testid="history"></div>`,
    )
    expect(() => queryByTestId(/his/)).toThrow(/multiple elements/i)
  })
})
