import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/app/styles/index.css'
import App from './app/routes/App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/provider/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
