import { Avatar } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { MdFormatQuote } from "react-icons/md";

function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "Grade 10 Student",
      content:
        "FinTeen made learning about money so much fun! I never thought I'd enjoy budgeting, but the games and real-life examples made it click. Now I'm actually excited to start investing when I turn 18!",
      avatar: <Avatar fallback="AS" variant="soft" />,
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Grade 12 Student",
      content:
        "The expert-guided content is amazing. I learned more about financial planning in 3 months with FinTeen than I did in my entire school curriculum. The real-world projects helped me create my first budget!",
      avatar: <Avatar fallback="PP" variant="soft" />,
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      role: "Parent",
      content:
        "As a parent, I'm thrilled to see my daughter taking charge of her finances. FinTeen has given her confidence and practical skills that will serve her for life. The progress tracking keeps me informed too!",
      avatar: <Avatar fallback="RK" variant="soft" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // const nextTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  // };

  // const prevTestimonial = () => {
  //   setCurrentTestimonial(
  //     (prev) => (prev - 1 + testimonials.length) % testimonials.length
  //   );
  // };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Section Header */}
      <div className="mb-16 space-y-6 text-center">
        <h2 className="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Hear From Our{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-cyan-500">
            Students & Parents
          </span>
        </h2>
        <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg dark:text-gray-300">
          Real stories from teens and parents who have transformed their
          financial futures with FinTeen.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentTestimonial * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 !cursor-grab px-2 select-none md:px-4"
                onDrag={(e) => e.preventDefault()}
              >
                <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-8 dark:border-gray-700 dark:bg-gray-800">
                  {/* Quote Icon */}
                  <div className="absolute top-3 left-6 flex size-10 items-center justify-center rounded-full bg-cyan-100 md:top-4 dark:bg-cyan-900/30">
                    <MdFormatQuote
                      size={24}
                      className="text-cyan-600 dark:text-cyan-400"
                    />
                  </div>
                  {/* Content */}
                  <div className="space-y-6 pt-8">
                    <p className="text-base leading-relaxed text-gray-700 italic md:text-lg dark:text-gray-300">
                      "{testimonial.content}"
                    </p>
                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      {testimonial.avatar}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 size-12 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 opacity-50 md:size-16 dark:from-gray-700 dark:to-gray-600"></div>
                  <div className="absolute right-8 bottom-4 size-6 rounded-full bg-gradient-to-br from-purple-50 to-pink-50 opacity-30 md:size-8 dark:from-gray-700 dark:to-gray-600"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="mt-8 flex cursor-pointer justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-3 w-3 !cursor-pointer rounded-full transition-colors duration-200 ${
                index === currentTestimonial
                  ? "bg-cyan-500 dark:bg-cyan-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="mb-2 text-3xl font-bold text-cyan-600 dark:text-cyan-400">
            98%
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Student Satisfaction Rate
          </p>
        </div>
        <div className="text-center">
          <div className="mb-2 text-3xl font-bold text-cyan-600 dark:text-cyan-400">
            4.9/5
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Average Parent Rating
          </p>
        </div>
        <div className="text-center">
          <div className="mb-2 text-3xl font-bold text-cyan-600 dark:text-cyan-400">
            10K+
          </div>
          <p className="text-gray-600 dark:text-gray-300">Success Stories</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
