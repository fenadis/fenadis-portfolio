"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import timelineEvents, { Timeline } from "@/app/data/Timelines";
import { TypeAnimation } from "react-type-animation";

export default function Timeline() {
  const [selectedTimeline, setSelectedTimeline] = useState<Timeline | null>(
    null
  );

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          My Journey
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary opacity-20"
            style={{ backgroundColor: `rgb(var(--primary))` }}
          ></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                onClick={() => setSelectedTimeline(event)}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <motion.div
                      className="bg-gray-800 bg-opacity-50 backdrop-blur-xl p-6 border border-primary border-opacity-20"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{
                        borderColor: `rgba(var(--primary), 0.2)`,
                        borderRadius: "8px",
                      }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <h4
                        className="text-lg font-semibold mb-2"
                        style={{ color: `rgb(var(--primary))` }}
                      >
                        {event.company}
                      </h4>
                      <p className="text-sm text-gray-300 mb-2">
                        {event.startDate} - {event.endDate}
                      </p>
                      <p className="text-gray-400">{event.description}</p>
                    </motion.div>
                  </div>
                  <div className="w-12 flex-shrink-0 flex items-center justify-center">
                    <div
                      className="w-4 h-4 rounded-full bg-primary"
                      style={{ backgroundColor: `rgb(var(--primary))` }}
                    ></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {selectedTimeline && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedTimeline(null)}
        >
          <motion.div
            className="bg-gray-800 rounded-[8px] flex flex-col gap-3 bg-opacity-90 p-6 h-[90%] max-w-2xl w-full m-4 border border-gray-700"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold text-white" style={{ color: `rgb(var(--accent))` }}>
                {selectedTimeline.title}
              </p>
              <button
                onClick={() => setSelectedTimeline(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-xs font-bold text-white">
                {selectedTimeline.company}
              </p>
              <p
                style={{ color: `rgb(var(--primary))` }}
              >
                |
              </p>
              <p className="text-xs font-bold text-white">
                {selectedTimeline.startDate} - {selectedTimeline.endDate}
              </p>
            </div>
            <p className="flex flex-1 text-xs overflow-y-auto">
              <TypeAnimation
                sequence={[
                  selectedTimeline.journey ?? ""
                ]}
                wrapper="span"
                speed={90}
                repeat={1}
                style={{ color: `rgb(var(--accent))` }}
              />
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
