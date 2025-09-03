import { useState, useEffect } from 'react';

// Custom hook for cart management
export const useCart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('uc-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('uc-cart', JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate totals
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Create Stripe checkout session (frontend version)
  const checkout = async () => {
    // For multiple items, you'd need a backend endpoint
    // For now, redirect to the first item's Stripe link
    if (cart.length === 1 && cart[0].stripeLink) {
      window.location.href = cart[0].stripeLink;
    } else {
      // This is where you'd call your backend to create a checkout session
      console.log('Multiple items checkout would require backend integration');
      alert('Multi-item checkout coming soon! For now, please order items individually.');
    }
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    itemCount,
    checkout
  };
};