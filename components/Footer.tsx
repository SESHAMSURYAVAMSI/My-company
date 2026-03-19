export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white p-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg">SaaScraft</h3>
        </div>

        <div>
          <p>Capabilities</p>
          <p>Industries</p>
          <p>Careers</p>
        </div>

        <div>
          <p>Follow us</p>
        </div>
      </div>

      <p className="text-xs mt-6">© 2026 SaaScraft</p>
    </footer>
  )
}
