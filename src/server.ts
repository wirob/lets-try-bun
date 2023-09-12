import Bun from 'bun'

function server() {
  Bun.serve({
    fetch(req) {
      return new Response(
        new Blob([JSON.stringify({ message: 'hi there!' }, null, 2)], {
          type: 'application/json',
        })
      )
    },
    port: 3000,
  })
}

export default server
