import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Voiceflows</h3>
            <p className="text-sm text-muted-foreground">AI-powered voice chat solutions for your business</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link to="/usecases" className="text-sm text-muted-foreground hover:text-primary">Use Cases</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Voiceflows. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}