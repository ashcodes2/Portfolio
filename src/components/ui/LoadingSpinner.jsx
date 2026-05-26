export default function LoadingSpinner() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        zIndex: 10,
      }}
    >
      <div className="spinner" />
    </div>
  )
}
