export default function WhoWeSupply() {
  const clients = [
    {
      icon: "🏪",
      title: "Supermarkets & Retail",
      description: "Daily bulk supply for retail chains and grocery stores.",
    },
    {
      icon: "🏨",
      title: "Hotels & Resorts",
      description: "Premium produce for hospitality kitchens and buffets.",
    },
    {
      icon: "🍽️",
      title: "Restaurants & Cafés",
      description: "Fresh ingredients for fine dining and casual eateries.",
    },
    {
      icon: "🎪",
      title: "Catering & Food Service",
      description: "Large-volume orders for events and institutional catering.",
    },
  ];

  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "Purchase Manager, Grand Meridian Hotel",
      text: "We've been ordering from AMS for 6 years now. At 4:30 AM, their truck is already at our loading dock — every single day, without fail. That kind of consistency is rare in this business.",
      stars: 5,
    },
    {
      name: "Priya Natarajan",
      role: "Owner, GreenBasket Supermarket Chain",
      text: "Switching to AMS cut our produce waste by almost 30%. Their grading is honest — what they promise as Grade A actually is Grade A. Our customers notice the difference.",
      stars: 5,
    },
    {
      name: "Mohammed Irfan",
      role: "Head Chef, Spice Route Restaurant",
      text: "The coriander and mint arrive so fresh, they still have dew on them. For a kitchen like ours that serves 400 covers a day, the quality of raw ingredients is everything.",
      stars: 5,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Who We Supply */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag">Our Clients</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.02em] mt-4">
            Trusted by 500+ Commercial Buyers
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            From neighborhood grocers to five-star hotel chains — we keep commercial kitchens stocked daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="glass-card bg-white p-7 rounded-xl text-center group"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">{client.icon}</span>
              <h3 className="font-heading text-base font-bold text-slate-900 mb-2">
                {client.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* Customer Reviews */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-tag">Customer Reviews</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.02em] mt-4">
              What Our Buyers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-between hover:shadow-lg hover:border-[#d97706]/30 transition-all duration-300"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-heading font-bold text-slate-900 text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
