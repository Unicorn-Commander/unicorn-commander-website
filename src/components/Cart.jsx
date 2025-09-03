import React from 'react';
import { X, ShoppingCart, Minus, Plus } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../data/products';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, itemCount, checkout } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-dark-surface shadow-xl z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              Your Cart ({itemCount})
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <p className="text-gray-400">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="mt-4 text-unicorn-purple hover:text-unicorn-blue transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="bg-dark-bg rounded-lg p-4 border border-gray-800">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{formatPrice(item.price)} each</div>
                        <div className="font-semibold">{formatPrice(item.price * item.quantity)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-800">
              <div className="flex justify-between mb-4">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-2xl font-bold text-unicorn-purple">
                  {formatPrice(cartTotal)}
                </span>
              </div>
              
              <button
                onClick={checkout}
                className="w-full btn btn-primary py-4 text-lg font-semibold"
              >
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-gray-400 text-center mt-2">
                Secure checkout powered by Stripe
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;