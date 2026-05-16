export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 800, margin: '4rem auto', padding: '0 2rem' }}>
      <h1>Payload CMS Demo</h1>
      <p>Welcome to the Payload CMS demo. Visit the admin panel to manage content.</p>
      <a
        href="/admin"
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          background: '#000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '4px',
        }}
      >
        Go to Admin Panel →
      </a>
    </main>
  )
}
