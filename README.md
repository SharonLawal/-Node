# NODEHUB - Ethereum Node Hardware Marketplace

NODEHUB is a modern, responsive web application for selling refurbished computer hardware specifically configured for running Ethereum nodes. The platform offers various hardware configurations optimized for different node operation needs.

## Features

- 🖥️ Customizable node hardware configurations
- 🔧 Multiple node software options (Dappnode, Stereum, Sege, etc.)
- 💾 Flexible RAM and storage options
- 🛒 Interactive shopping cart
- 💫 Smooth animations and transitions
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with Vite and React

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/
│   ├── cart/
│   ├── layout/
│   ├── payment/
│   ├── product/
│   └── sections/
├── config/
├── data/
├── hooks/
├── pages/
├── store/
├── types/
└── utils/
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nodehub.git
   ```

2. Install dependencies:
   ```bash
   cd nodehub
   npm install
   ```

3. Create a `.env` file:
   ```env
   VITE_RECEIVER_ADDRESS=your_eth_address
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features

### Product Customization
- Choose from various node software options
- Configure RAM, storage, and processor specifications
- Real-time price updates based on configuration

### Shopping Cart
- Add/remove items
- Multiple items support
- Persistent cart state
- Total price calculation

### Responsive Design
- Mobile-first approach
- Smooth transitions
- Optimized for all screen sizes

### Performance
- Code splitting
- Lazy loading
- Optimized assets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)