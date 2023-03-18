<header>
      <div className='inner_header'>
     
          <div>
            <motion.div
              onClick={() => home_content()}
              whileTap={{ scale: 0.9 }}
              className="icon_holder"
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1 }}
              variants={iconss}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={router.pathname == "/" ? "active icon_container" : "icon_container"} onClick={play}>
                <div className="icons" id="home_icon">
                  <div className="text" style={{ overflow: 'visible' } >
                    Home
                  </div>
                  <motion.div variants={iconSvg} className="glow" id="home_button">
                    <svg id="homeIcon" width="18" height="18" viewBox="0 0 31 31" fill={iconsColor} xmlns="http://www.w3.org/2000/svg">
                      
                    
                    </svg>
                  </motion.div>
                </div>
                <div className="dot_active"></div>
              </div>
            </motion.div>
          </div>
      
       
          </div>
</header>