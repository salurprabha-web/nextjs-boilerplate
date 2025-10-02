export interface Product {
  id: string
  name: string
  description: string
  category: string
  subcategory?: string
  brand?: string
  price?: string
  images: string[]
  tags: string[]
  specifications?: Record<string, string>
  availability: 'in-stock' | 'out-of-stock' | 'custom-order'
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  color: string
  image?: string
  slug: string
  parent?: string
  children?: string[]
  featured: boolean
  sortOrder: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage: string
  author: string
  publishedAt: Date
  updatedAt: Date
  status: 'draft' | 'published'
  tags: string[]
  category: string
  seoTitle?: string
  seoDescription?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  image?: string
  verified: boolean
  featured: boolean
  createdAt: Date
}

export interface Partner {
  id: string
  name: string
  description?: string
  logo: string
  website?: string
  category: string
  featured: boolean
  sortOrder: number
}

// Content Management Functions
export class ContentManager {
  private static instance: ContentManager
  private products: Product[] = []
  private categories: Category[] = []
  private blogPosts: BlogPost[] = []
  private testimonials: Testimonial[] = []
  private partners: Partner[] = []

  static getInstance(): ContentManager {
    if (!ContentManager.instance) {
      ContentManager.instance = new ContentManager()
    }
    return ContentManager.instance
  }

  // Product Management
  async addProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    const newProduct: Product = {
      ...product,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.products.push(newProduct)
    await this.saveToLocalStorage()
    return newProduct
  }

  async updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
    const index = this.products.findIndex(p => p.id === id)
    if (index === -1) return null
    
    this.products[index] = {
      ...this.products[index],
      ...updates,
      updatedAt: new Date(),
    }
    await this.saveToLocalStorage()
    return this.products[index]
  }

  async deleteProduct(id: string): Promise<boolean> {
    const index = this.products.findIndex(p => p.id === id)
    if (index === -1) return false
    
    this.products.splice(index, 1)
    await this.saveToLocalStorage()
    return true
  }

  getProducts(filters?: {
    category?: string
    featured?: boolean
    availability?: Product['availability']
  }): Product[] {
    let filtered = [...this.products]
    
    if (filters?.category) {
      filtered = filtered.filter(p => p.category === filters.category)
    }
    
    if (filters?.featured !== undefined) {
      filtered = filtered.filter(p => p.featured === filters.featured)
    }
    
    if (filters?.availability) {
      filtered = filtered.filter(p => p.availability === filters.availability)
    }
    
    return filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  // Category Management
  async addCategory(category: Omit<Category, 'id' | 'slug'>): Promise<Category> {
    const newCategory: Category = {
      ...category,
      id: this.generateId(),
      slug: this.generateSlug(category.name),
    }
    this.categories.push(newCategory)
    await this.saveToLocalStorage()
    return newCategory
  }

  async updateCategory(id: string, updates: Partial<Category>): Promise<Category | null> {
    const index = this.categories.findIndex(c => c.id === id)
    if (index === -1) return null
    
    this.categories[index] = {
      ...this.categories[index],
      ...updates,
      slug: updates.name ? this.generateSlug(updates.name) : this.categories[index].slug,
    }
    await this.saveToLocalStorage()
    return this.categories[index]
  }

  getCategories(parent?: string): Category[] {
    return this.categories
      .filter(c => c.parent === parent)
      .sort((a, b) => a.sortOrder - b.sortOrder)
  }

  // Blog Management
  async addBlogPost(post: Omit<BlogPost, 'id' | 'slug' | 'publishedAt' | 'updatedAt'>): Promise<BlogPost> {
    const newPost: BlogPost = {
      ...post,
      id: this.generateId(),
      slug: this.generateSlug(post.title),
      publishedAt: new Date(),
      updatedAt: new Date(),
    }
    this.blogPosts.push(newPost)
    await this.saveToLocalStorage()
    return newPost
  }

  async updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
    const index = this.blogPosts.findIndex(b => b.id === id)
    if (index === -1) return null
    
    this.blogPosts[index] = {
      ...this.blogPosts[index],
      ...updates,
      slug: updates.title ? this.generateSlug(updates.title) : this.blogPosts[index].slug,
      updatedAt: new Date(),
    }
    await this.saveToLocalStorage()
    return this.blogPosts[index]
  }

  getPublishedBlogPosts(): BlogPost[] {
    return this.blogPosts
      .filter(post => post.status === 'published')
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
  }

  // Testimonial Management
  async addTestimonial(testimonial: Omit<Testimonial, 'id' | 'createdAt'>): Promise<Testimonial> {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: this.generateId(),
      createdAt: new Date(),
    }
    this.testimonials.push(newTestimonial)
    await this.saveToLocalStorage()
    return newTestimonial
  }

  getTestimonials(featured?: boolean): Testimonial[] {
    let filtered = [...this.testimonials]
    
    if (featured !== undefined) {
      filtered = filtered.filter(t => t.featured === featured)
    }
    
    return filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  // Partner Management
  async addPartner(partner: Omit<Partner, 'id'>): Promise<Partner> {
    const newPartner: Partner = {
      ...partner,
      id: this.generateId(),
    }
    this.partners.push(newPartner)
    await this.saveToLocalStorage()
    return newPartner
  }

  getPartners(featured?: boolean): Partner[] {
    let filtered = [...this.partners]
    
    if (featured !== undefined) {
      filtered = filtered.filter(p => p.featured === featured)
    }
    
    return filtered.sort((a, b) => a.sortOrder - b.sortOrder)
  }

  // Utility Methods
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  private generateSlug(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  private async saveToLocalStorage(): Promise<void> {
    if (typeof window !== 'undefined') {
      try {
        const data = {
          products: this.products,
          categories: this.categories,
          blogPosts: this.blogPosts,
          testimonials: this.testimonials,
          partners: this.partners,
        }
        localStorage.setItem('kuhaan-content', JSON.stringify(data))
      } catch (error) {
        console.error('Failed to save content to localStorage:', error)
      }
    }
  }

  private loadFromLocalStorage(): void {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('kuhaan-content')
        if (saved) {
          const data = JSON.parse(saved)
          this.products = data.products || []
          this.categories = data.categories || []
          this.blogPosts = data.blogPosts || []
          this.testimonials = data.testimonials || []
          this.partners = data.partners || []
        }
      } catch (error) {
        console.error('Failed to load content from localStorage:', error)
      }
    }
  }

  // Initialize with default data
  async initialize(): Promise<void> {
    this.loadFromLocalStorage()
    
    // Add default categories if none exist
    if (this.categories.length === 0) {
      const defaultCategories: Omit<Category, 'id' | 'slug'>[] = [
        {
          name: 'Hospitality Supplies',
          description: 'Premium supplies for hotels and resorts',
          icon: 'Building2',
          color: 'bg-blue-500',
          featured: true,
          sortOrder: 1,
        },
        {
          name: 'Software & IT',
          description: 'Complete software and IT infrastructure solutions',
          icon: 'Monitor',
          color: 'bg-indigo-500',
          featured: true,
          sortOrder: 2,
        },
        {
          name: 'Manufacturing',
          description: 'Raw materials and industrial equipment',
          icon: 'Factory',
          color: 'bg-orange-500',
          featured: true,
          sortOrder: 3,
        },
        {
          name: 'Corporate Office',
          description: 'Office supplies and workspace solutions',
          icon: 'Briefcase',
          color: 'bg-purple-500',
          featured: true,
          sortOrder: 4,
        },
        {
          name: 'Appliances',
          description: 'Commercial and residential appliances',
          icon: 'Package',
          color: 'bg-green-500',
          featured: true,
          sortOrder: 5,
        },
        {
          name: 'Electronics',
          description: 'Electronic devices and components',
          icon: 'Monitor',
          color: 'bg-red-500',
          featured: true,
          sortOrder: 6,
        },
      ]
      
      for (const category of defaultCategories) {
        await this.addCategory(category)
      }
    }
  }
}

// Export singleton instance
export const contentManager = ContentManager.getInstance()