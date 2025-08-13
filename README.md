# Chat Interface Project

A modern, responsive Next chat interface with dynamic states and smooth animations built with Next.js, featuring an adaptive chat system that can be expanded, minimized, or collapsed based on user interaction.

## 🚀 Features

- **Dynamic Chat States**: Three distinct chat modes - expanded, minimized, and collapsed
- **Responsive Design**: Fully responsive across desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion for seamless transitions
- **Interactive Navigation**: Sidebar navigation with active state management
- **Multi-Page Support**: Separate pages with persistent chat functionality
- **Voice & File Upload**: Built-in support for voice messages and file uploads
- **Customizable Options**: Dropdown selectors for user preferences

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: JavaScript/JSX



## 🎨 Components

### ChatInterface
The main chat component that handles three different states:

- **Expanded**: Full-screen chat interface with complete functionality
- **Minimized**: Side panel chat window for multitasking
- **Collapsed**: Floating chat icon with pulse animation

**Key Features:**
- Message history display
- Interactive input area with file upload and voice recording
- Customizable dropdown options (User, Briefcase, Location, Calendar)
- Smooth state transitions with animation variants

### NavigationBar
A vertical sidebar navigation component featuring:

- Fixed positioning with gradient background
- Active state management
- Hover and tap animations
- Main navigation (Home, Chat) and utility icons (Settings, Help, Mail, Logout)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

git clone <your-repo-url>
cd chat-interface-project



2. Install dependencies:

npm install
or

yarn install



3. Start the development server:

npm run dev



4. Open [http://localhost:8080](http://localhost:8080) in your browser

## 📱 Usage

### Chat States
- **Home Page**: Chat starts in expanded mode
- **Secondary Page**: Chat starts in minimized mode
- **Collapsed State**: Click the floating icon to minimize
- **Navigation**: Use sidebar buttons to switch between pages

### Interactive Elements
- **Send Messages**: Type in the input field and click send
- **File Upload**: Click the upload icon to attach files
- **Voice Messages**: Click the microphone icon for voice input
- **Options**: Use dropdown menus to set preferences

## ⚙️ Port Configuration

This application is configured to run on **port 8080**. The port settings are defined in `package.json`:
```
{
"scripts": {
"dev": "next dev -p 8080",
"build": "next build",
"start": "next start -p 8080",
"lint": "next lint"
}
}
```
