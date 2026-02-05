import type React from "react"

interface CardProps {
  icon?: React.ReactNode
  title: string
  description: string
  color?: "primary" | "accent" | "secondary"
}

export default function Card({ icon, title, description, color = "primary" }: CardProps) {
  const colorClasses = {
    primary: "border-l-4 border-primary hover:border-accent",
    accent: "border-l-4 border-accent hover:border-secondary",
    secondary: "border-l-4 border-secondary hover:border-primary",
  }

  const gradientClasses = {
    primary: "from-primary/5 to-accent/5",
    accent: "from-accent/5 to-secondary/5",
    secondary: "from-secondary/5 to-primary/5",
  }

  return (
    <div className={`group relative bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${colorClasses[color]} overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10">
        {icon && <div className="mb-5 text-4xl transform group-hover:scale-110 transition-transform duration-300">{icon}</div>}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
