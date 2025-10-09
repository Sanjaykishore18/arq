import React, { useState, useEffect } from "react";



import utopia from "../photos/utopia thumbnail.webp"
import alumnati from "../photos/alumaniti thumbnail.webp"
import dataloar from "../photos/datalore thumbnail.webp"
// Updated Data for ARQ Club of Data Science events

const upcomingEvents = [
  {
    id: 1,
    title: "UTOPIA’25 – Investiture Ceremony",
    date: "Oct 10, 2025",
    duration: "3 hours",
    status: "Open",
    description: "Formal induction of student leaders and coordinators for the academic year 2025–26. Celebration of ARQ’s growth and future roadmap. Inspirational addresses from faculty and club mentors. Recognition of student contributions and leadership roles.",
    short: "When Data speaks, ARQ listens. Join for the formal club investiture ceremony hosted by Department of AI & DS at Indoor Auditorium.",
    highlights: "Student leader induction, Inspirational speeches, Recognition, Club growth roadmap"
  }
];

const pastSummary = {
  successStories: [
{
  name: "sivarama krishna",
  story: "Pitch or Pass is an investment challenge where teams analyze data, develop strategies, and present proposals to expert investors.",
  year: "2025"
}
,
{
  name: "Sricharan N",
  story: "UXplore is a UI/UX design competition where teams craft innovative, user-centric experiences and complete design systems.",
  year: "2025"
}
,
  ]
};

const completedEvents = [
  {
    id: 'c1',
    title: "ARQ Club Inauguration – UTOPIA’25 (Launch Edition)",
    date: "February 5, 2025",
    participants: null,
    type: "Inauguration",
    highlights: "Launch of ARQ Club, Badge and LOA felicitation, Industry talks, AI startups, Innovation encouragement",
    image: utopia,
    status: "Completed",
    rating: 4.9
  },
  {
    id: 'c2',
    title: "ALUMNATI – Data Analytics Hands-On Workshop",
    date: "March 15, 2025",
    participants: null,
    type: "Workshop",
    highlights: "ML modules, Data preprocessing, EDA, Data visualization, Alumni mentorship",
    image: alumnati,
    status: "Completed",
    rating: 4.8
  },
  {
    id: 'c3',
    title: "DATALORE’25 – National Level Technical Symposium",
    date: "April 28, 2025",
    participants: 270,
    duration: "Full day",
    type: "Symposium",
    highlights: "Finance Workshop, Paper presentation, Startup pitching, Competitive coding, AI prompt engineering, UI/UX challenge, Project expo",
    image: dataloar,
    rating: 4.9
  }
];

function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div style={styles.eventModalOverlay} onClick={onClose}>
      <div style={styles.eventModal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.eventModalHeader}>
          <div style={styles.eventModalIcon}>🚀</div>
          <div>
            <h3 style={styles.eventModalTitle}>{event.title}</h3>
            <div style={styles.eventModalMeta}>
              <span style={styles.eventDate}>📅 {event.date}</span>
              <span style={styles.eventLocation}>📍 {event.venue || "Virtual Event"}</span>
            </div>
          </div>
          <button style={styles.eventModalClose} onClick={onClose}>
            ×
          </button>
        </div>
        <div style={styles.eventModalBody}>
          <p style={styles.modalText}>{event.description}</p>
          <div>
            <h4 style={styles.modalSubheading}>Key Points:</h4>
            <p style={styles.modalText}>{event.short}</p>
          </div>
          <div>
            <h4 style={styles.modalSubheading}>Highlights:</h4>
            <p style={styles.modalText}>{event.highlights}</p>
          </div>
        </div>
        <div style={styles.eventModalFooter}>
          <div style={styles.eventModalActions}>
            <button style={styles.buttonPrimary} onClick={onClose}>
              Join Event
            </button>
            <button style={styles.buttonSecondary} onClick={onClose}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming');

  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 12,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.eventsPage}>
      <style jsx>{`
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes horizontal-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes modal-appear { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        body { margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #000; color: #fff; }
        @media (max-width: 768px) {
          .events-grid { grid-template-columns: 1fr!important; }
          .enhanced-stats-grid { grid-template-columns: repeat(2,1fr)!important; }
          .stories-grid { grid-template-columns: 1fr!important; }
          .countdown-timer { flex-wrap: wrap!important; gap: 8px!important; }
          .hero-actions { flex-direction: column!important; align-items: center!important; }
        }
      `}</style>

      <section style={styles.eventsHero}>
        <div style={styles.eventsHeroContent}>
          <span style={styles.eventsHeroBadge}>🎯 Next Event Starting Soon</span>
          <h1 style={styles.eventsHeroTitle}>Transform Your Future</h1>
          <p style={styles.eventsHeroSubtitle}>Join workshops, hackathons, and tech talks that shape your future</p>
          <div className="countdown-timer" style={styles.countdownTimer}>
            <div style={styles.countdownItem}>
              <div style={styles.countdownNumber}>{timeLeft.days}</div>
              <div style={styles.countdownLabel}>Days</div>
            </div>
            <div style={styles.countdownItem}>
              <div style={styles.countdownNumber}>{timeLeft.hours}</div>
              <div style={styles.countdownLabel}>Hours</div>
            </div>
            <div style={styles.countdownItem}>
              <div style={styles.countdownNumber}>{timeLeft.minutes}</div>
              <div style={styles.countdownLabel}>Min</div>
            </div>
            <div style={styles.countdownItem}>
              <div style={styles.countdownNumber}>{timeLeft.seconds}</div>
              <div style={styles.countdownLabel}>Sec</div>
            </div>
          </div>
          <div className="hero-actions" style={styles.eventsHeroActions}>
            <button style={styles.buttonPrimary}>Explore Events</button>
            <button style={styles.buttonSecondary}>View Schedule</button>
          </div>
        </div>
      </section>

      <main style={styles.section}>
        <div style={styles.tabNavigation}>
          <button style={{ ...styles.tabButton, ...(activeTab==='upcoming'?styles.tabButtonActive:{}) }} onClick={()=>setActiveTab('upcoming')}>Upcoming Events</button>
          <button style={{ ...styles.tabButton, ...(activeTab==='completed'?styles.tabButtonActive:{}) }} onClick={()=>setActiveTab('completed')}>Past Events</button>
        </div>

        {activeTab==='upcoming' && (
          <section>
            <div style={styles.eventsSectionHeader}>
              <h2 style={styles.eventsSectionTitle}>Upcoming Events</h2>
              <p style={styles.eventsSectionSubtitle}>Don't miss these exciting opportunities</p>
            </div>
            <div className="events-grid" style={styles.eventsGrid}>
              {upcomingEvents.map(event=>(
                <div key={event.id} style={styles.eventCard} onClick={()=>setSelectedEvent(event)}>
                  <div style={styles.eventCardHeader}>
                    <div style={styles.eventCardIcon}>🚀</div>
                    <span style={styles.eventCardStatus}>{event.status}</span>
                  </div>
                  <div style={styles.eventCardContent}>
                    <h3 style={styles.eventCardTitle}>{event.title}</h3>
                    <div style={styles.eventCardMeta}>
                      <div style={styles.eventMetaItem}><span style={styles.eventMetaIcon}>📅</span><span>{event.date}</span></div>
                      <div style={styles.eventMetaItem}><span style={styles.eventMetaIcon}>⏱</span><span>{event.duration}</span></div>
                      <div style={styles.eventMetaItem}><span style={styles.eventMetaIcon}>📍</span><span>Indoor Auditorium</span></div>
                    </div>
                    <p style={styles.eventCardDescription}>{event.short}</p>
                    <div style={styles.eventPreviewTags}>
                      <span style={styles.previewTag}>Leadership</span>
                      <span style={styles.previewTag}>Inspiration</span>
                      <span style={styles.previewTag}>Recognition</span>
                    </div>
                  </div>
                  <div style={styles.eventCardFooter}>
                    <div style={styles.eventParticipants}>
                      <div style={styles.participantAvatars}>
                        <div style={styles.participantAvatar}>👤</div>
                        <div style={styles.participantAvatar}>👤</div>
                        <div style={styles.participantAvatar}>👤</div>
                        <div style={styles.participantCount}>+50</div>
                      </div>
                      <span style={styles.participantsText}>registered</span>
                    </div>
                    <button style={styles.eventRegisterBtn}>Register</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab==='completed' && (
          <section style={styles.completedEventsSection}>
            <div style={styles.eventsSectionHeader}>
              <h2 style={styles.eventsSectionTitle}>Past Events</h2>
              <p style={styles.eventsSectionSubtitle}>Celebrating our successful events and achievements</p>
            </div>
            <div style={styles.completedEventsScrollContainer}>
              <div style={styles.completedEventsScrollWrapper}>
                {[...completedEvents,...completedEvents].map((event,i)=>(
                  <div key={`${event.id}-${i}`} style={styles.completedEventCard}>
                    <div style={styles.completedEventImage}>
                      <img src={event.image} alt={event.title} style={styles.completedEventImageImg}/>
                      <div style={styles.completedEventOverlay}>
                        <span style={styles.eventTypeBadge}>{event.type}</span>
                        <div style={styles.eventRating}><span style={styles.ratingStars}>⭐</span><span style={styles.ratingScore}>{event.rating}</span></div>
                      </div>
                    </div>
                    <div style={styles.completedEventContent}>
                      <div style={styles.completedEventHeader}>
                        <h3 style={styles.completedEventTitle}>{event.title}</h3>
                        <span style={styles.completedEventStatus}>{event.status}</span>
                      </div>
                      <div style={styles.completedEventMeta}>
                        <div style={styles.completedMetaItem}><span style={styles.metaIcon}>📅</span><span>{event.date}</span></div>
                        <div style={styles.completedMetaItem}><span style={styles.metaIcon}>⏱</span><span>{event.duration}</span></div>
                      </div>
                      <div style={styles.completedEventHighlights}>
                        <h4 style={styles.highlightsTitle}>Highlights</h4>
                        <p style={styles.highlightsText}>{event.highlights}</p>
                      </div>
                      <div style={styles.completedEventStats}>
                        <div style={styles.statItem}><div style={styles.statNumber}>{event.participants||"-"}</div><div style={styles.statLabel}>Participants</div></div>
                        <div style={styles.statItem}><div style={styles.statNumber}>{event.rating}</div><div style={styles.statLabel}>Rating</div></div>
                        <div style={styles.statItem}><div style={styles.statNumber}>100%</div><div style={styles.statLabel}>Completion</div></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section style={styles.eventsStatsSection}>
          <h2 style={styles.statsSectionTitle}>Our Impact in Numbers</h2>
          <div className="enhanced-stats-grid" style={styles.enhancedStatsGrid}>
            <div style={styles.enhancedStatsCard}><div style={styles.statsCardIcon}>🎯</div><div style={styles.statsCardNumber}>3+</div><div style={styles.statsCardLabel}>Events Conducted</div><div style={styles.statsCardTrend}><span>📈</span><span>+25% this year</span></div></div>
            <div style={styles.enhancedStatsCard}><div style={styles.statsCardIcon}>👥</div><div style={styles.statsCardNumber}>50K+</div><div style={styles.statsCardLabel}>Total Participants</div><div style={styles.statsCardTrend}><span>📈</span><span>+40% growth</span></div></div>
            <div style={styles.enhancedStatsCard}><div style={styles.statsCardIcon}>🏆</div><div style={styles.statsCardNumber}>98%</div><div style={styles.statsCardLabel}>Satisfaction Rate</div><div style={styles.statsCardTrend}><span>📈</span><span>Excellent feedback</span></div></div>
            <div style={styles.enhancedStatsCard}><div style={styles.statsCardIcon}>🌟</div><div style={styles.statsCardNumber}>5K+</div><div style={styles.statsCardLabel}>Certificates Issued</div><div style={styles.statsCardTrend}><span>📈</span><span>Career boost</span></div></div>
          </div>
        </section>

        <section style={styles.successStories}>
          <h2 style={styles.successTitle}>Success Stories</h2>
          <div className="stories-grid" style={styles.storiesGrid}>
            {pastSummary.successStories.map((s,i)=>(
              <div key={i} style={styles.storyCard}>
                <div style={styles.storyAvatar}>👤</div>
                <div style={styles.storyContent}>
                  <h4 style={styles.storyQuote}>{s.story}</h4>
                  <p style={styles.storyAuthor}>- {s.name}, {s.year}</p>
                  <div style={styles.storyRating}>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {selectedEvent && <EventModal event={selectedEvent} onClose={()=>setSelectedEvent(null)}/>}
    </div>
  );
}

const styles = {
  eventsPage: {
    minHeight: '100vh',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    background: '#000000',
    color: '#ffffff',
  },
  eventsHero: {
    position: 'relative',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000000',
    padding: '40px 20px',
  },
  eventsHeroContent: {
    textAlign: 'center',
    maxWidth: '600px',
    padding: '0 20px',
  },
  eventsHeroBadge: {
    display: 'inline-block',
    background: '#8B5CF6',
    color: '#ffffff',
    padding: '8px 20px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  eventsHeroTitle: {
    fontSize: '48px',
    margin: '20px 0',
    color: '#ffffff',
    fontWeight: '700',
  },
  eventsHeroSubtitle: {
    fontSize: '18px',
    color: '#9CA3AF',
    marginBottom: '32px',
    lineHeight: '1.6',
  },
  eventsHeroActions: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '32px',
  },
  countdownTimer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    background: '#1F2937',
    padding: '16px',
    borderRadius: '12px',
    marginBottom: '32px',
    border: '1px solid #374151',
  },
  countdownItem: {
    textAlign: 'center',
    minWidth: '60px',
  },
  countdownNumber: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#8B5CF6',
  },
  countdownLabel: {
    fontSize: '12px',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    marginTop: '4px',
  },
  section: {
    margin: '40px auto',
    maxWidth: '1200px',
    padding: '0 20px',
  },
  tabNavigation: {
    display: 'flex',
    gap: '8px',
    marginBottom: '40px',
    justifyContent: 'center',
  },
  tabButton: {
    padding: '12px 24px',
    border: '1px solid #374151',
    background: '#1F2937',
    color: '#9CA3AF',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  },
  tabButtonActive: {
    background: '#8B5CF6',
    color: '#ffffff',
    borderColor: '#8B5CF6',
  },
  eventsSectionHeader: {
    textAlign: 'center',
    margin: '40px 0 32px',
  },
  eventsSectionTitle: {
    fontSize: '36px',
    marginBottom: '12px',
    color: '#ffffff',
    fontWeight: '700',
  },
  eventsSectionSubtitle: {
    color: '#9CA3AF',
    fontSize: '16px',
  },
  eventsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px',
    margin: '40px 0',
  },
  eventCard: {
    background: '#1F2937',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #374151',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  eventCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px 12px',
  },
  eventCardIcon: {
    fontSize: '32px',
  },
  eventCardStatus: {
    background: '#8B5CF6',
    color: '#ffffff',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  eventCardContent: {
    padding: '0 24px 20px',
  },
  eventCardTitle: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '16px',
    lineHeight: '1.3',
  },
  eventCardMeta: {
    display: 'flex',
    gap: '20px',
    marginBottom: '16px',
    flexWrap: 'wrap',
  },
  eventMetaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#9CA3AF',
    fontSize: '14px',
  },
  eventMetaIcon: {
    fontSize: '16px',
  },
  eventCardDescription: {
    color: '#D1D5DB',
    lineHeight: '1.6',
    marginBottom: '16px',
    fontSize: '14px',
  },
  eventPreviewTags: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
    flexWrap: 'wrap',
  },
  previewTag: {
    background: '#374151',
    color: '#D1D5DB',
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '12px',
    fontWeight: '500',
  },
  eventCardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 24px 20px',
  },
  eventParticipants: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  participantAvatars: {
    display: 'flex',
    alignItems: 'center',
  },
  participantAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-6px',
    border: '2px solid #1F2937',
    fontSize: '14px',
    color: '#9CA3AF',
  },
  participantCount: {
    background: '#8B5CF6',
    color: '#ffffff',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '600',
    marginLeft: '-6px',
    border: '2px solid #1F2937',
  },
  participantsText: {
    color: '#9CA3AF',
    fontSize: '14px',
  },
  eventRegisterBtn: {
    background: '#8B5CF6',
    color: '#ffffff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s ease',
  },
  completedEventsSection: {
    margin: '40px 0',
  },
  completedEventsScrollContainer: {
    position: 'relative',
    overflow: 'hidden',
    padding: '20px 0',
  },
  completedEventsScrollWrapper: {
    display: 'flex',
    gap: '24px',
    animation: 'horizontal-scroll 30s linear infinite',
    width: 'fit-content',
  },
  completedEventCard: {
    flexShrink: 0,
    width: '350px',
    background: '#1F2937',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #374151',
  },
  completedEventImage: {
    position: 'relative',
    height: '180px',
    overflow: 'hidden',
  },
  completedEventImageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  completedEventOverlay: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    right: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  eventTypeBadge: {
    background: '#8B5CF6',
    color: '#ffffff',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  eventRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#ffffff',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
  },
  ratingStars: {
    fontSize: '14px',
  },
  ratingScore: {
    fontWeight: '600',
    color: '#ffffff',
  },
  completedEventContent: {
    padding: '24px',
  },
  completedEventHeader: {
    marginBottom: '16px',
  },
  completedEventTitle: {
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 8px 0',
    lineHeight: '1.3',
  },
  completedEventStatus: {
    background: '#10B981',
    color: '#ffffff',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    display: 'inline-block',
  },
  completedEventMeta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '16px',
  },
  completedMetaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '#9CA3AF',
    fontSize: '14px',
    background: '#374151',
    padding: '4px 8px',
    borderRadius: '6px',
  },
  metaIcon: {
    fontSize: '14px',
  },
  completedEventHighlights: {
    marginBottom: '20px',
  },
  highlightsTitle: {
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    margin: '0 0 8px 0',
  },
  highlightsText: {
    color: '#D1D5DB',
    fontSize: '14px',
    margin: 0,
    lineHeight: '1.5',
  },
  completedEventStats: {
    display: 'flex',
    justifyContent: 'space-around',
    background: '#374151',
    padding: '16px',
    borderRadius: '8px',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#8B5CF6',
  },
  statLabel: {
    fontSize: '12px',
    color: '#9CA3AF',
    marginTop: '4px',
    fontWeight: '500',
  },
  eventsStatsSection: {
    margin: '60px 0',
    textAlign: 'center',
  },
  statsSectionTitle: {
    fontSize: '36px',
    marginBottom: '40px',
    color: '#ffffff',
    fontWeight: '700',
  },
  enhancedStatsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
  },
  enhancedStatsCard: {
    background: '#1F2937',
    padding: '32px 24px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px solid #374151',
    transition: 'transform 0.2s ease',
  },
  statsCardIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  statsCardNumber: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#8B5CF6',
    marginBottom: '8px',
  },
  statsCardLabel: {
    color: '#D1D5DB',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  statsCardTrend: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    color: '#10B981',
    fontSize: '14px',
    fontWeight: '500',
  },
  successStories: {
    margin: '60px 0',
    textAlign: 'center',
  },
  successTitle: {
    fontSize: '36px',
    marginBottom: '40px',
    color: '#ffffff',
    fontWeight: '700',
  },
  storiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
  },
  storyCard: {
    background: '#1F2937',
    padding: '24px',
    borderRadius: '12px',
    display: 'flex',
    gap: '20px',
    textAlign: 'left',
    border: '1px solid #374151',
  },
  storyAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    flexShrink: 0,
    color: '#9CA3AF',
  },
  storyContent: {
    flex: 1,
  },
  storyQuote: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    margin: '0 0 12px 0',
    lineHeight: '1.5',
  },
  storyAuthor: {
    color: '#9CA3AF',
    fontSize: '14px',
    margin: '0 0 8px 0',
  },
  storyRating: {
    fontSize: '16px',
  },
  buttonPrimary: {
    padding: '12px 24px',
    background: '#8B5CF6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.2s ease',
  },
  buttonSecondary: {
    padding: '12px 24px',
    background: 'transparent',
    color: '#8B5CF6',
    border: '2px solid #8B5CF6',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.2s ease',
  },
  eventModalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  eventModal: {
    background: '#1F2937',
    borderRadius: '12px',
    maxWidth: '500px',
    width: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
    animation: 'modal-appear 0.3s ease-out',
    border: '1px solid #374151',
  },
  eventModalHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '24px 24px 16px',
    borderBottom: '1px solid #374151',
  },
  eventModalIcon: {
    fontSize: '32px',
    flexShrink: 0,
  },
  eventModalTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    margin: 0,
  },
  eventModalMeta: {
    display: 'flex',
    gap: '16px',
    marginTop: '8px',
  },
  eventDate: {
    color: '#9CA3AF',
    fontSize: '14px',
  },
  eventLocation: {
    color: '#9CA3AF',
    fontSize: '14px',
  },
  eventModalClose: {
    marginLeft: 'auto',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: '#9CA3AF',
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s ease',
  },
  eventModalBody: {
    padding: '20px 24px',
  },
  modalText: {
    color: '#D1D5DB',
    lineHeight: '1.6',
    margin: '0 0 16px 0',
  },
  modalSubheading: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    margin: '16px 0 8px 0',
  },
  eventModalFooter: {
    padding: '0 24px 24px',
  },
  eventModalActions: {
    display: 'flex',
    gap: '12px',
    marginTop: '20px',
  },
};

export default Events;