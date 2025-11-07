import * as Services from '../../app/services'

describe('app/services exports', () => {
  it('exports utilities/services', () => {
    const keys = Object.keys(Services)
    expect(keys.length).toBeGreaterThan(0)
  })

  it('each exported symbol is defined', () => {
    Object.keys(Services).forEach((k) => {
      expect((Services as any)[k]).toBeDefined()
    })
  })
})
