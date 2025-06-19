
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Shield, Quote } from 'lucide-react';

const AnonymousReviews = () => {
  const reviews = [
    {
      quote: "Finally, a way to report cleanliness issues without fear of being singled out. Our washrooms have improved so much since using this platform.",
      student: "Class 10 student from a CBSE school",
      tag: "#Facilities",
      verified: true
    },
    {
      quote: "I was able to share my concerns about a teacher's behavior anonymously. The school administration took action and things got better.",
      student: "Grade 8 student, North India",
      tag: "#TeacherBehaviour",
      verified: true
    },
    {
      quote: "Reported bullying incidents through this platform. The school created anti-bullying policies and appointed counselors. I feel safer now.",
      student: "Student from a co-ed school (location hidden)",
      tag: "#Safety",
      verified: true
    },
    {
      quote: "Used this to suggest improvements for our library and sports facilities. The school actually listened and made changes!",
      student: "Grade 11 student, English-medium school",
      tag: "#Infrastructure",
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Student Voices
          </h2>
          <p className="text-lg text-gray-600">
            Anonymous feedback that's making a real difference in Indian schools
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                      <div className="flex items-start gap-3 mb-4">
                        <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 text-lg leading-relaxed flex-1">
                          "{review.quote}"
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {review.tag}
                        </Badge>
                        {review.verified && (
                          <div className="flex items-center gap-1 text-green-600 text-sm">
                            <Shield className="w-4 h-4" />
                            <span className="font-medium">Verified anonymous submission</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-sm text-gray-500 italic">
                          {review.student}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-gray-700 font-medium">All submissions are completely anonymous and encrypted</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnonymousReviews;
