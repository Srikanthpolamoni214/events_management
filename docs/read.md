<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Organizer Dashboard - Eventbrite</title>

  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />

  <style>
    body {
      padding-top: 56px;
    }
    .sidebar {
      min-height: 100vh;
      background-color: #f8f9fa;
      padding-top: 1rem;
    }
    .sidebar a {
      text-decoration: none;
      color: #333;
      display: block;
      padding: 0.75rem 1rem;
      border-radius: 0.375rem;
      margin-bottom: 0.25rem;
    }
    .sidebar a.active,
    .sidebar a:hover {
      background-color: #0d6efd;
      color: white;
    }
  </style>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Eventbrite</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="./index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./login.html">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-3 col-lg-2 d-md-block sidebar collapse" id="sidebarMenu">
        <div class="position-sticky">
          <h5 class="px-3 mb-3">Organizer Menu</h5>
          <a href="#" class="active" id="dashboard-link"
            ><i class="fa fa-tachometer-alt me-2"></i> Dashboard</a
          >
          <a href="#" id="events-link"
            ><i class="fa fa-calendar-alt me-2"></i> My Events</a
          >
          <a href="#" id="create-link"
            ><i class="fa fa-plus-circle me-2"></i> Create Event</a
          >
          <a href="#" id="settings-link"><i class="fa fa-cog me-2"></i> Settings</a>
        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
        <h1 class="h2 mb-4">Welcome, Organizer!</h1>

        <div class="row mb-4">
          <div class="col-sm-6 col-md-3">
            <div class="card text-white bg-primary mb-3">
              <div class="card-body">
                <h5 class="card-title">Total Events</h5>
                <p class="card-text fs-3" id="total-events">0</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-3">
            <div class="card text-white bg-success mb-3">
              <div class="card-body">
                <h5 class="card-title">Upcoming Events</h5>
                <p class="card-text fs-3" id="upcoming-events">0</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-3">
            <div class="card text-white bg-warning mb-3">
              <div class="card-body">
                <h5 class="card-title">Total Attendees</h5>
                <p class="card-text fs-3" id="total-attendees">0</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-3">
            <div class="card text-white bg-danger mb-3">
              <div class="card-body">
                <h5 class="card-title">Events Pending Approval</h5>
                <p class="card-text fs-3" id="pending-events">0</p>
              </div>
            </div>
          </div>
        </div>

        <h3>My Events</h3>
        <div class="table-responsive mb-5">
          <table class="table table-striped table-hover align-middle">
            <thead class="table-dark">
              <tr>
                <th scope="col">Event Name</th>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
                <th scope="col">Status</th>
                <th scope="col" style="width: 140px;">Actions</th>
              </tr>
            </thead>
            <tbody id="events-table-body">
              <!-- Filled dynamically -->
            </tbody>
          </table>
        </div>

        <button class="btn btn-success" id="btn-create-event">Create New Event</button>
      </main>
    </div>
  </div>

  <!-- Modals -->
  <!-- Create/Edit Event Modal -->
  <div
    class="modal fade"
    id="eventModal"
    tabindex="-1"
    aria-labelledby="eventModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <form id="event-form">
          <div class="modal-header">
            <h5 class="modal-title" id="eventModalLabel">Create Event</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input type="hidden" id="event-id" />
            <div class="mb-3">
              <label for="event-name" class="form-label">Event Name</label>
              <input
                type="text"
                class="form-control"
                id="event-name"
                required
                maxlength="100"
              />
            </div>
            <div class="mb-3">
              <label for="event-date" class="form-label">Date</label>
              <input
                type="date"
                class="form-control"
                id="event-date"
                required
              />
            </div>
            <div class="mb-3">
              <label for="event-location" class="form-label">Location</label>
              <input
                type="text"
                class="form-control"
                id="event-location"
                required
                maxlength="150"
              />
            </div>
            <div class="mb-3">
              <label for="event-status" class="form-label">Status</label>
              <select class="form-select" id="event-status" required>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="event-description" class="form-label">Description</label>
              <textarea
                class="form-control"
                id="event-description"
                rows="3"
                required
              ></textarea>
          </div>

          <div>
            <label for="phone" class="form-label">Phone Number</label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              placeholder="Enter your phone number"
              required  
            />

          </div>
          <div >
            <label for="event-image" class="form-label">Event Image</label>
            <input
              type="file"
              class="form-control"
              id="event-image"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" id="save-event-btn">
              Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModalLabel">Delete Event</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete the event <strong id="delete-event-name"></strong>?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-danger" id="confirm-delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  ></script>

  <script>
    const API_BASE_URL = '/api/organizer'; // adjust if needed

    // Elements
    const totalEventsEl = document.getElementById('total-events');
    const upcomingEventsEl = document.getElementById('upcoming-events');
    const totalAttendeesEl = document.getElementById('total-attendees');
    const pendingEventsEl = document.getElementById('pending-events');
    const eventsTableBody = document.getElementById('events-table-body');
    const btnCreateEvent = document.getElementById('btn-create-event');

    // Modals
    const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));

    // Form & fields
    const eventForm = document.getElementById('event-form');
    const eventIdInput = document.getElementById('event-id');
    const eventNameInput = document.getElementById('event-name');
    const eventDateInput = document.getElementById('event-date');
    const eventLocationInput = document.getElementById('event-location');
    const eventStatusSelect = document.getElementById('event-status');
    const eventDescript = document.getElementById('event-description');
    const phoneInput = document.getElementById('phone');
    const eventImageInput = document.getElementById('event-image');

    let events = [];
    let eventToDelete = null;

    // Fetch stats and events
    // async function loadStats() {
    //   try {
    //     const res = await fetch(`http://localhost:3000/stats`, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         // Authorization: `Bearer ${token}`, // add auth header if needed
    //       },
    //     });
    //     if (!res.ok) throw new Error('Failed to fetch stats');
    //     const stats = await res.json();
    //     totalEventsEl.textContent = stats.totalEvents || 0;
    //     upcomingEventsEl.textContent = stats.upcomingEvents || 0;
    //     totalAttendeesEl.textContent = stats.totalAttendees || 0;
    //     pendingEventsEl.textContent = stats.pendingEvents || 0;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }

    async function loadEvents() {
      try {
        const res = await fetch(`http://localhost:3000/events`, {
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`, // add auth header if needed
          },
        });
        if (!res.ok) throw new Error('Failed to fetch events');
        events = await res.json();
        renderEventsTable();
      } catch (err) {
        console.error(err);
      }
    }

    // Render event rows
    function renderEventsTable() {
      eventsTableBody.innerHTML = '';
      if (events.length === 0) {
        eventsTableBody.innerHTML = `
          <tr>
            <td colspan="5" class="text-center">No events found.</td>
          </tr>
        `;
        return;
      }
      events.forEach((event) => {
        const statusClass = getStatusClass(event.status);
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${escapeHtml(event.name)}</td>
          <td>${escapeHtml(event.date)}</td>
          <td>${escapeHtml(event.location)}</td>
          <td><span class="badge ${statusClass}">${escapeHtml(event.status)}</span></td>
          
          <td>
            <button class="btn btn-sm btn-primary btn-edit" data-id="${event.id}">Edit</button>
            <button class="btn btn-sm btn-danger btn-delete" data-id="${event.id}">Delete</button>
          </td>
        `;
        eventsTableBody.appendChild(tr);
      });

      // Attach event listeners for buttons
      document.querySelectorAll('.btn-edit').forEach((btn) =>
        btn.addEventListener('click', (e) => {
          const id = e.target.dataset.id;
          openEditEventModal(id);
        })
      );

      document.querySelectorAll('.btn-delete').forEach((btn) =>
        btn.addEventListener('click', (e) => {
          const id = e.target.dataset.id;
          openDeleteModal(id);
        })
      );
    }

    function getStatusClass(status) {
      switch (status) {
        case 'Approved':
          return 'bg-success';
        case 'Pending':
          return 'bg-warning text-dark';
        case 'Cancelled':
          return 'bg-danger';
        default:
          return 'bg-secondary';
      }
    }

    // Escape HTML helper to avoid XSS
    function escapeHtml(text) {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      };
      return text.replace(/[&<>"']/g, function (m) {
        return map[m];
      });
    }

    // Open Create Event modal
    btnCreateEvent.addEventListener('click', () => {
      clearEventForm();
      eventModal.show();
    });

    // Clear and reset form
    function clearEventForm() {
      eventIdInput.value = '';
      eventNameInput.value = '';
      eventDateInput.value = '';
      eventLocationInput.value = '';
      eventStatusSelect.value = 'Pending';
      eventDescript.value = '';
      phoneInput.value = '';

      document.getElementById('eventModalLabel').textContent = 'Create Event';
      document.getElementById('save-event-btn').textContent = 'Save Event';
    }

    // Open Edit modal with event data filled
    function openEditEventModal(id) {
      const event = events.find((ev) => ev.id === id);
      if (!event) return alert('Event not found');
      eventIdInput.value = event.id;
      eventNameInput.value = event.name;
      eventDateInput.value = event.date;
      eventLocationInput.value = event.location;
      eventStatusSelect.value = event.status;
      eventDescript.value = event.description;
      phoneInput.value = event.phone;
      eventImageInput.value = event.photos || '';
      
      // Set the modal title and button text
      document.getElementById('eventModalLabel').textContent = 'Edit Event';
      document.getElementById('save-event-btn').textContent = 'Update Event';
      eventModal.show();
    }

    // Handle Create/Edit form submit
    eventForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const id = eventIdInput.value;
      const eventData = {
        name: eventNameInput.value.trim(),
        date: eventDateInput.value,
        location: eventLocationInput.value.trim(),
        status: eventStatusSelect.value,
        description: eventDescript.value.trim(),
        phone: phoneInput.value.trim(),
        photos: eventImageInput.value,


      };

      try {
        if (id) {
          // Update existing event
          const res = await fetch(`${API_BASE_URL}/events/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              // Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(eventData),
          });
          if (!res.ok) throw new Error('Failed to update event');
        } else {
          // Create new event
        const res = await fetch(`http://localhost:3000/events`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(eventData),
        });
        const data = await res.json();  // <-- this gets the parsed JSON from the response body
alert(data.message); // <-- this will show the response data in an alert
        console.log(res);
        if (!res.ok) throw new Error('Failed to create event');
        }
        eventModal.hide();
        await loadStats();
        await loadEvents();
      } catch (err) {
        alert(err.message);
      }
    });

    // Delete modal handlers
    const deleteEventNameEl = document.getElementById('delete-event-name');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

    function openDeleteModal(id) {
      const event = events.find((ev) => ev.id === id);
      if (!event) return alert('Event not found');
      eventToDelete = event;
      deleteEventNameEl.textContent = event.name;
      deleteModal.show();
    }

    confirmDeleteBtn.addEventListener('click', async () => {
      if (!eventToDelete) return;
      try {
        const res = await fetch(`${API_BASE_URL}/events/${eventToDelete.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error('Failed to delete event');
        deleteModal.hide();
        await loadStats();
        await loadEvents();
      } catch (err) {
        alert(err.message);
      }
    });

    // Initial load
    // loadStats();
    loadEvents();
  </script>
</body>
</html>



