export function getMockFetch(param: { data: Record<string, unknown> }) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(param.data),
    })
  );
}
