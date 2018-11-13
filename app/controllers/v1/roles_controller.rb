class V1::RolesController < ApplicationController
  def show
    @role = get_role

    if @role.is_evil? || @role.is_merlin?
      @roles = Role.where({ affinity: 'evil', room_id: params[:room_id] })
        .where.not({ id: @role.id })
    end
  end

  private

  def get_role
    Role.find_by({ room_id: params[:room_id], user_id: params[:id]})
  end
end
