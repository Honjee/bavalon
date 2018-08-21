# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180815230315) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "missions", force: :cascade do |t|
    t.integer "room_id", null: false
    t.integer "round", null: false
    t.integer "good_wins", default: 0, null: false
    t.integer "bad_wins", default: 0, null: false
    t.integer "num_voters", null: false
    t.boolean "need_two_fails", default: false, null: false
    t.index ["room_id", "round"], name: "index_missions_on_room_id_and_round", unique: true
  end

  create_table "players", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "room_id", null: false
    t.text "players", default: ""
    t.index ["owner_id", "room_id"], name: "index_players_on_owner_id_and_room_id", unique: true
  end

  create_table "roles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "room_id", null: false
    t.string "role", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "affinity", null: false
    t.index ["user_id", "room_id"], name: "index_roles_on_user_id_and_room_id", unique: true
  end

  create_table "rooms", force: :cascade do |t|
    t.boolean "hasMordred", default: false, null: false
    t.boolean "hasOberon", default: false, null: false
    t.boolean "hasPercival", default: true, null: false
    t.integer "current_mission"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "owner_id"
    t.string "name", null: false
    t.boolean "started", default: false
    t.index ["name"], name: "index_rooms_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.integer "games_won", default: 0, null: false
    t.integer "games_lost", default: 0, null: false
    t.integer "times_bad", default: 0, null: false
    t.integer "times_good", default: 0, null: false
    t.boolean "is_admin", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "votes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "mission_id", null: false
    t.boolean "vote"
    t.boolean "all_voted", null: false
    t.index ["user_id", "mission_id"], name: "index_votes_on_user_id_and_mission_id", unique: true
  end

end
