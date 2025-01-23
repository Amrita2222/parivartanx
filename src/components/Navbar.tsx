"use client"; 
import { useState } from "react"; 
import { Menu, X, ChevronDown, Sun, Moon, Code } from "lucide-react"; 
import { useTheme } from "./ThemeProvider"; 

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Products", href: "#", children: [
    { name: "Analytics", href: "#" },
    { name: "Engagement", href: "#" },
    { name: "Security", href: "#" },
    { name: "Integrations", href: "#" },
  ]},
 
  { name: "Service", href: "#" },
  { name: "Project", href: "#" },
  { name: "Support", href: "#" },
  { name: "Contact", href: "#" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="dark:bg-black bg-black fixed w-full top-0 z-50 shadow-lg" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Code className="h-8 w-8 text-green-700 dark:text-green-400" />
            <span className="text-xl sm:text-2xl font-semibold text-white">ParivantanX</span>
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-x-1 text-sm sm:text-base font-medium text-white"
                >
                  {item.name}
                  <ChevronDown className={`h-4 w-4 text-white transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-black dark:bg-gray-800 p-2 shadow-lg ring-1 ring-gray-900/5">
                    {item.children.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block rounded-lg px-3 py-2 text-sm sm:text-base font-medium text-white hover:bg-gray-700"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm sm:text-base font-medium leading-6 text-white hover:text-gray-400"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <button
            onClick={toggleTheme}
            className="rounded-full p-1 text-white hover:bg-gray-800"
          >
            {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
          
          <a
            href="#"
            className="rounded-full bg-green-600 px-4 py-2 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Sign up
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl font-semibold text-white">ParivantanX</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-2 py-2 text-sm sm:text-base font-medium leading-7 text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={toggleTheme}
                    className="rounded-full p-1 text-white hover:bg-gray-800"
                  >
                    {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                  </button>
                  <a
                    href="#"
                    className="rounded-full bg-green-600 px-4 py-2 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
