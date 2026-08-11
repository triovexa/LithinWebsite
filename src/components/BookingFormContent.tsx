import { useState, useRef, useEffect } from 'react';
import { Send, User, Phone, Package, MapPin, Box, Calendar, Truck, Check } from 'lucide-react';
import toast from 'react-hot-toast';

export const CITY_SUGGESTIONS = [
  'Chennai',
  'Mumbai',
  'Bengaluru',
  'Hyderabad',
  'Coimbatore',
  'Delhi NCR',
  'Ahmedabad',
  'Pune',
  'Kolkata',
  'Tirupur',
  'Hosur',
  'Surat',
  'Visakhapatnam',
  'Kochi',
  'Madurai',
  'Salem',
  'Trichy',
  'Vijayawada',
  'Nagpur',
  'Jaipur'
];

export const CONTAINER_SIZES = [
  '9ft',
  '10ft',
  '14ft',
  '17ft',
  '20ft',
  '22ft',
  '24ft',
  '32ft',
  '40ft'
];

interface BookingFormContentProps {
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
}

export default function BookingFormContent({ onSuccess, title = "LITHIN TRANSPORT", subtitle = "Container Booking Form" }: BookingFormContentProps) {
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    material: '',
    from: '',
    to: '',
    container: '20ft',
    quantity: '1 Container',
    pickupDate: new Date().toISOString().split('T')[0]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fromFocused, setFromFocused] = useState(false);
  const [toFocused, setToFocused] = useState(false);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setFromFocused(false);
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setToFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredFromCities = CITY_SUGGESTIONS.filter(city =>
    city.toLowerCase().includes(formData.from.toLowerCase())
  );

  const filteredToCities = CITY_SUGGESTIONS.filter(city =>
    city.toLowerCase().includes(formData.to.toLowerCase())
  );

  const formatDateForWhatsApp = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const dateObj = new Date(dateStr);
      if (isNaN(dateObj.getTime())) return dateStr;
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = months[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      return `${day}-${month}-${year}`;
    } catch {
      return dateStr;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.clientName.trim()) {
      toast.error('Please enter Client Name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      toast.error('Please enter a valid 10-digit Phone Number');
      return;
    }
    if (!formData.material.trim()) {
      toast.error('Please enter Material details');
      return;
    }
    if (!formData.from.trim()) {
      toast.error('Please enter From location');
      return;
    }
    if (!formData.to.trim()) {
      toast.error('Please enter To location');
      return;
    }

    setIsSubmitting(true);

    const refNo = `LT-BK-${Math.floor(1000 + Math.random() * 9000)}`;
    const formattedDate = formatDateForWhatsApp(formData.pickupDate);

    const whatsappText = 
      `Lithin Transport - Container Booking\n\n` +
      `Client Name: ${formData.clientName}\n` +
      `Phone: ${formData.phone}\n` +
      `Material: ${formData.material}\n` +
      `From: ${formData.from}\n` +
      `To: ${formData.to}\n` +
      `Container: ${formData.container}\n` +
      `Quantity: ${formData.quantity}\n` +
      `Pickup Date: ${formattedDate}\n\n` +
      `Booking Ref: ${refNo}`;


    const targetPhone = "919566738884";
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(whatsappText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Booking Confirmed! Opening WhatsApp with details... (Ref: ${refNo})`);
      window.open(whatsappUrl, '_blank');
      setFormData({
        clientName: '',
        phone: '',
        material: '',
        from: '',
        to: '',
        container: '20ft',
        quantity: '1 Container',
        pickupDate: new Date().toISOString().split('T')[0]
      });
      if (onSuccess) onSuccess();
    }, 800);
  };



  return (
    <div className="flex flex-col gap-5">
      {/* Form Header */}
      <div className="border-b border-emerald-500/20 pb-4">
        <h3 className="text-2xl font-black text-white uppercase tracking-wider font-sans flex items-center gap-2">
          <span className="text-emerald-400">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
        </h3>
        <p className="text-xs text-emerald-400 font-bold tracking-wider uppercase mt-1">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Field 1 & 2: Client Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>Client Name</span>
              <span className="text-emerald-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. ABC Company"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Phone</span>
              <span className="text-emerald-400">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
        </div>

        {/* Field 3: Material */}
        <div>
          <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-emerald-400" />
            <span>Material</span>
            <span className="text-emerald-400">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Garments"
            value={formData.material}
            onChange={(e) => setFormData({ ...formData, material: e.target.value })}
            className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>

        {/* Field 4 & 5: From & To with City Auto-complete Recommendations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* From City input with recommendation dropdown */}
          <div className="relative" ref={fromRef}>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>From (Pickup)</span>
              <span className="text-emerald-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Chennai"
              value={formData.from}
              onFocus={() => setFromFocused(true)}
              onChange={(e) => {
                setFormData({ ...formData, from: e.target.value });
                setFromFocused(true);
              }}
              className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
            />

            {fromFocused && filteredFromCities.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-[#060b1e] border border-emerald-500/40 rounded-2xl shadow-2xl z-30 max-h-48 overflow-y-auto p-1.5">
                <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">
                  Suggested Locations
                </div>
                {filteredFromCities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, from: city });
                      setFromFocused(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-white hover:bg-emerald-500/20 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>{city}</span>
                    {formData.from.toLowerCase() === city.toLowerCase() && (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* To City input with recommendation dropdown */}
          <div className="relative" ref={toRef}>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>To (Destination)</span>
              <span className="text-emerald-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Mumbai"
              value={formData.to}
              onFocus={() => setToFocused(true)}
              onChange={(e) => {
                setFormData({ ...formData, to: e.target.value });
                setToFocused(true);
              }}
              className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
            />

            {toFocused && filteredToCities.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-[#060b1e] border border-emerald-500/40 rounded-2xl shadow-2xl z-30 max-h-48 overflow-y-auto p-1.5">
                <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">
                  Suggested Locations
                </div>
                {filteredToCities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, to: city });
                      setToFocused(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-white hover:bg-emerald-500/20 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>{city}</span>
                    {formData.to.toLowerCase() === city.toLowerCase() && (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Field 6 & 7: Container Size Selection & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Container Size Dropdown & Quick Selection Chips */}
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Box className="w-3.5 h-3.5 text-emerald-400" />
              <span>Container Size</span>
            </label>
            <select
              value={formData.container}
              onChange={(e) => setFormData({ ...formData, container: e.target.value })}
              className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
            >
              {CONTAINER_SIZES.map((size) => (
                <option key={size} value={size} className="bg-[#060b1e] text-white">
                  {size} Container
                </option>
              ))}
            </select>

            {/* Quick Pick Size Chips: 9ft, 10ft, 14ft, 17ft, 20ft, 22ft, 24ft, 32ft, 40ft */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {CONTAINER_SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setFormData({ ...formData, container: size })}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold uppercase transition-all border cursor-pointer ${
                    formData.container === size
                      ? 'bg-emerald-500 text-white border-emerald-400 shadow-md shadow-emerald-500/30'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:border-emerald-500/40 hover:text-emerald-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Quantity</span>
            </label>
            <select
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
            >
              <option value="1 Container" className="bg-[#060b1e]">1 Container</option>
              <option value="2 Containers" className="bg-[#060b1e]">2 Containers</option>
              <option value="3 Containers" className="bg-[#060b1e]">3 Containers</option>
              <option value="4 Containers" className="bg-[#060b1e]">4 Containers</option>
              <option value="5+ Containers" className="bg-[#060b1e]">5+ Containers Fleet</option>
            </select>
          </div>
        </div>

        {/* Field 8: Pickup Date Calendar Picker */}
        <div>
          <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pickup Date (Select from Calendar)</span>
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.pickupDate}
              onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
              className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
              style={{ colorScheme: 'dark' }}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[#10b981] hover:bg-emerald-600 text-white font-black rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-50 mt-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Submitting Booking...' : 'Book Now'}</span>
        </button>
      </form>
    </div>
  );
}
