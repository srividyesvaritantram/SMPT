import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiClock, FiGlobe, FiUser, FiHeart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import './CourseCard.css';

export default function CourseCard({ data }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.div
      className="course-card"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ y: hovered ? -8 : 0, boxShadow: hovered ? '0 0 30px rgba(184,134,11,0.4)' : '0 0 0 rgba(0,0,0,0)' }}
      transition={{ duration: 0.25 }}
      onClick={() => navigate(`/courses/${data.id}`)}
      style={{ borderColor: hovered ? 'rgba(184,134,11,0.5)' : 'rgba(184,134,11,0.1)' }}
    >
      {/* Thumbnail */}
      <div className="course-card__thumb">
        <img src={data.thumbnail} alt={data.title} loading="lazy" data-course-id={data.id} />
        <div className="course-card__badges">
          {data.isFree && <span className="badge badge--free">FREE</span>}
          {data.isNew && <span className="badge badge--new">NEW</span>}
          {data.isBestseller && <span className="badge badge--best">BESTSELLER</span>}
        </div>
        <button className={`course-card__wishlist ${wishlisted ? 'course-card__wishlist--active' : ''}`}
          onClick={(e) => { e.stopPropagation(); setWishlisted(!wishlisted); }}>
          <FiHeart size={16} fill={wishlisted ? '#B8860B' : 'none'} />
        </button>
        {hovered && (
          <motion.div className="course-card__overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="course-card__play"><FiUser size={24} /></div>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="course-card__body">
        <p className="course-card__category">{data.category?.toUpperCase()}</p>
        <h3 className="course-card__title">{data.title}</h3>
        <p className="course-card__instructor"><FiUser size={12} /> {data.instructor}</p>
        <div className="course-card__rating">
          {[1,2,3,4,5].map((s) => <FaStar key={s} size={12} color={s <= Math.floor(data.rating) ? '#E8C76A' : '#333'} />)}
          <span>{data.rating} ({data.students})</span>
        </div>
        <div className="course-card__meta">
          <span><FiClock size={11} /> {data.duration}</span>
          <span><FiGlobe size={11} /> {data.language}</span>
        </div>
        <div className="course-card__footer">
          <div className="course-card__price">
            {data.isFree ? (
              <span className="course-card__price--free golden-text">FREE</span>
            ) : (
              <>
                <span className="course-card__price--current">₹{data.price}</span>
                {data.originalPrice && <span className="course-card__price--original">₹{data.originalPrice}</span>}
                {data.discountPercent && <span className="course-card__price--discount">{data.discountPercent}% OFF</span>}
              </>
            )}
          </div>
          <motion.button
            className={`course-card__enroll ${hovered ? 'course-card__enroll--active' : ''}`}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            ENROLL
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
