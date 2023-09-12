import request from 'supertest'
import server from 'server'
import { beforeAll, describe, expect, it } from 'bun:test'

describe('server', () => {
  beforeAll(() => {
    server()
  })

  it('responds with 200', async () => {
    const req = request('http://localhost:3000')

    const response = await req.get('/')

    expect(response.status).toEqual(200)
  })

  it('responds with correct body', async () => {
    const req = request('http://localhost:3000')

    const response = await req.get('/')

    expect(response.body).toEqual({ message: 'hi there!' })
  })
})
