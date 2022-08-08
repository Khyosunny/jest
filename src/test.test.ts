beforeAll(() => console.log('beforeAll...'));

test('object', () => {
  const data: { [key: string]: string | number } = { name: '효선' };
  data['age'] = 28;
  expect(data).toEqual({ name: '효선', age: 28 });
});

test('null', () => {
  expect(null).toBeNull();
  expect(null).toBeDefined();
  expect(null).not.toBeUndefined();
  expect(null).not.toBeTruthy();
  expect(null).toBeFalsy();
});

test('numbers', () => {
  expect(5).toBeGreaterThan(3);
  expect(5).toBeGreaterThanOrEqual(4);
  expect(5).toBeLessThan(8);
  expect(5).toBeLessThanOrEqual(5.5);
});

test('strings', () => {
  expect('hyosun').toMatch(/hyo/);
});

const fruits = ['apple', 'banana', 'orange'];
test('array and iterables', () => {
  expect(fruits).toHaveLength(3);
  expect(fruits).toContain('apple');
  expect(fruits).not.toContain('peach');
});

function exceptions() {
  throw new Error('test error');
}

test('exceptions', () => {
  expect(() => exceptions()).toThrow();
  expect(() => exceptions()).toThrow(Error);
  expect(() => exceptions()).toThrow('test error');
});

describe('test', () => {
  let message = '';
  beforeEach(() => (message = 'Hi'));

  test('message', () => {
    expect(message).toBe('Hi');
  });
});
