import { format, addDays } from 'date-fns'

export const state = () => {
  const savedBookingFilters = JSON.parse(
    window.localStorage.getItem('booking.filters')
  )
  const savedSelectedRoom = JSON.parse(
    window.localStorage.getItem('booking.selectedRoom')
  )

  const filters = savedBookingFilters || {
    checkIn: format(new Date(), 'dd/MM/yyyy'),
    checkOut: format(addDays(new Date(), 1), 'dd/MM/yyyy'),
    pax: 2,
    childs: 0,
    promo_code: null,
  }

  return {
    filters,
    selectedRoom: savedSelectedRoom,
    infoMessage: '',
    showBookingModal: false,
    showMobileMenu: false,
    rooms: [
      {
        id: 1,
        description: 'Mini Dreamy Room',
        details:
          'Generous and comfortable these modern furnished rooms offer two queen-size beds and are on the first floor',
        size: 20,
        beds: 1,
        pax: 2,
        price: 200,
      },
      {
        id: 2,
        description: 'Seet Bungalow',
        details:
          'The perfect blend of comfort and culture, our superior room with a central garden view has the stunning, and comes with a ...',
        size: 50,
        beds: 1,
        pax: 2,
        price: 350,
      },
      {
        id: 3,
        description: 'Los Cocos Suite',
        details:
          'If you want a little extra from your stay, you might like our superior rooms. A ocean view room has a private beach and a ...',
        size: 125,
        beds: 3,
        pax: 4,
        price: 450,
      },
    ],
  }
}

/** mutations */
export const mutations = {
  setFilters(state, filters) {
    state.filters = filters
  },
  setSelectedRoom(state, room) {
    state.selectedRoom = room
  },
  setInfoMessage(state, message) {
    state.infoMessage = message
  },
  setPromoCode(state, code) {
    state.filters.promo_code = code
  },
  setShowBookingModal(state, status) {
    state.showBookingModal = status
  },
  setShowMobileMenu(state, status) {
    state.showMobileMenu = status
  },
}

/** actions */
export const actions = {
  setFilters({ commit }, filters) {
    commit('setFilters', filters)
  },
  setSelectedRoom({ commit }, room) {
    commit('setSelectedRoom', room)
  },
  setInfoMessage({ commit }, message) {
    commit('setInfoMessage', message)
  },
  setPromoCode({ commit }, code) {
    commit('setPromoCode', code)
  },
  setShowBookingModal({ commit }, status) {
    commit('setShowBookingModal', status)
  },
  setShowMobileMenu({ commit }, status) {
    commit('setShowMobileMenu', status)
  },
  saveLocalData({ commit, state }) {
    window.localStorage.setItem(
      'booking.filters',
      JSON.stringify(state.filters)
    )
    window.localStorage.setItem(
      'booking.selectedRoom',
      JSON.stringify(state.selectedRoom)
    )

    commit('setInfoMessage', 'Filters saved localy')
  },
}
